let username;

// username = prompt("Enter your username");
// console.log(username);

document.getElementById("btn").onclick = function () {
  username = document.getElementById("name").value;
  document.getElementById("h1").innerHTML = `Welcome back ${username}`;
  console.log(username);
};
