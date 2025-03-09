let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Please inseert your username");
  password = window.prompt("Please insert your passowrd");

  if (username === "admin123" && password === "123") {
    console.log("You are logged in");
    loggedIn = true;
  } else {
    console.log("Invalid Credetnails, please try agian");
  }
}

do {
  username = window.prompt("Please inseert your username");
  password = window.prompt("Please insert your passowrd");

  if (username === "admin123" && password === "123") {
    console.log("You are logged in");
    loggedIn = true;
  } else {
    console.log("Invalid Credetnails, please try agian");
  }
} while (!loggedIn);

// let i = 0;

// while (i < 11) {
//   console.log(i);
//   i++;
// }
