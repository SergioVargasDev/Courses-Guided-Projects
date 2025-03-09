let word = "Sergio";
for (let i = 0; i < word.length; i++) {
  console.log(word.charAt(i).toUpperCase());
}

for (let i = 10; i > 0; i--) {
  if (i == 5) {
    continue;
  } else if (i == 1) {
    break;
  }
  console.log(i);
}
