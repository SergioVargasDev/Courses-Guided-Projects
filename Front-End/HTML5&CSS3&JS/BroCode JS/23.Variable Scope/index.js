// variable scopr = where a variable is recognized and
// accesible (local vs global)

x = 5;
y = 2;

function function1() {
  // local scope
  x = 3;
  console.log(x);
}

function function2() {
  // lcoal scope
  x = 5;
  console.log(x);
}

function function3() {
  // global scope
  console.log(y);
}

function1();
function2();
function3();
