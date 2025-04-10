import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import mongoose from "mongoose";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    const prompt = await Prompt.findById(id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const { id } = await params;

    // Find the existing prompt by ID
    const existingPrompt = await Prompt.findById(id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    // Update the prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const { id } = params;
    console.log("Deleting prompt with ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response("Invalid prompt ID", { status: 400 });
    }

    const deletedPrompt = await Prompt.findByIdAndDelete(id); // ✅ Fixed method

    if (!deletedPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return new Response("Error deleting prompt", { status: 500 });
  }
};
