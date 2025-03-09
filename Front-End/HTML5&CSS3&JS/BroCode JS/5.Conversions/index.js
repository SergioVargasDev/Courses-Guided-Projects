username = window.prompt("Enter a number");
console.log(username);

username += 1;

console.log(username);

username = Number(username);
username += 1;
console.log(username, typeof username);

let x = 5;
let y = "pizza";
let z = false;

x = String(x);
y = Number(y);
z = String(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
