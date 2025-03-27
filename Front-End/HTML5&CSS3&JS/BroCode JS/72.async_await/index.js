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

async function doChores() {
  try {
    const dogResult = await walkDog;
    console.log(dogResult);

    const cleanResult = await cleanKitchen;
    console.log(cleanResult);

    const trashResult = await takeOutTrash();
    console.log(trashResult);

    console.log("Excellent, you finished");
  } catch (error) {
    console.error(error);
  }
}

doChores();

// function step1() {
//     return new Promise((resolve) => {
//       console.log("Step 1");
//       let result = 5;
//       resolve(result);
//     });
//   }

//   function step2(valueFromStep1) {
//     return new Promise((resolve) => {
//       console.log("Step 2: Got", valueFromStep1);
//       let result = valueFromStep1 + 10;
//       resolve(result);
//     });
//   }

//   function step3(valueFromStep2) {
//     console.log("Step 3: Got", valueFromStep2);
//     console.log("Final result:", valueFromStep2 * 2);
//   }

//   // Method 1: .then() chaining
//   step1()
//     .then(result1 => step2(result1))
//     .then(result2 => step3(result2))
//     .catch(err => console.error("Error:", err));

//   // Method 2: async/await (cleanest)
//   async function runSteps() {
//     try {
//       const result1 = await step1();
//       const result2 = await step2(result1);
//       step3(result2);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   runSteps();

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

async function sumOperation() {
  try {
    const result1 = await sum;
    console.log(result1);

    const result2 = await sum2(result1);
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
}

sumOperation();
