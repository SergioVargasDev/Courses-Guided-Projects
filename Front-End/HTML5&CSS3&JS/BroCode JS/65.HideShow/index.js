myBtn = document.getElementById("btn");
image = document.getElementById("image");

// myBtn.addEventListener("click", (event) => {
//   if (image.style.display === "none") {
//     image.style.display = "block";
//     myBtn.innerHTML = "Hide";
//   } else {
//     image.style.display = "none";
//     myBtn.innerHTML = "Show";
//   }
// });

myBtn.addEventListener("click", (event) => {
  if (image.style.visibility === "hidden") {
    image.style.visibility = "visible";
    myBtn.innerHTML = "Hide";
  } else {
    image.style.visibility = "hidden";
    myBtn.innerHTML = "Show";
  }
});
