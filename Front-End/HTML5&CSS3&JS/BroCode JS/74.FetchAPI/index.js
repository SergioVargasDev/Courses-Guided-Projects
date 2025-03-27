// fetch("https://pokeapi.co/api/v2/pokemon/charizard")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/a")
//   .then((response) => {
// if (!response.ok) {
//   throw new Error("Could not fetch resource");
// }

//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// async function fetchData() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }

//     console.log(response);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.visibility = "visible";
  } catch (error) {
    console.error(error);
  }
}
