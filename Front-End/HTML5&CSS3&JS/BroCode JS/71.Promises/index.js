const walkDog = new Promise((resolve, reject) => {
  setTimeout(() => {
    const dogWalked = true;

    if (dogWalked) {
      resolve("You walk the dog");
    } else {
      reject("You didn´t walk the dog");
    }
  }, 1500);
});

const cleanKitchen = new Promise((resolve, reject) => {
  setTimeout(() => {
    const kitchenCleaned = true;

    if (kitchenCleaned) {
      resolve("You cleaned the kitchen");
    } else {
      reject("You didn´t clean");
    }
  }, 1500);
});

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOut = true;

      if (trashOut) {
        resolve("You took the trash out");
      } else {
        reject("You didn´t take the trash out");
      }
    }, 1500);
  });
}

walkDog
  .then((value) => {
    console.log(value);
    return cleanKitchen;
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you finished all the tasks");
  })
  .catch((error) => console.error(error));

// function sum(x, y) {
//   return new Promise((resolve, reject) => {
//     if (x + y > 0) {
//       resolve("Above 0");
//     } else {
//       reject("Below 0");
//     }
//   });
// }

// sum(4, 2).then((data) => {
//   console.log(data);
// });

const sum = new Promise((resolve, reject) => {
  const x = 5;
  const y = 4;
  if (x + y > 0) {
    resolve(3);
  } else {
    reject("Below 0");
  }
});

function sum2(result) {
  return new Promise((resolve, reject) => {
    const x = -1;
    if (x + result > 0) {
      resolve("Above 0");
    } else {
      reject("Below 0");
    }
  });
}

sum
  .then((data) => {
    console.log(data);
    return sum2(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
