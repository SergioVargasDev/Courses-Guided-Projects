function sum(x, y, callback) {
  result = x + y;
  callback(result);
}

function displayDom(result) {
  document.getElementById("myH1").innerHTML = result;
}

sum(1, 1, displayDom);
