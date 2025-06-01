// //Function Declaration
// // function greet(name) {
// //   console.log("Hello - ", name);
// // }
// // //function expression
// // const greet2 = function (name) {
// //   console.log(" 2 Hello - ", name);
// // };

// // greet("Batyrhan");
// // greet2("Batyrhan");

// // console.dir(greet);

// // setTimeout(function () {
// //   greet("Batyrhan2");
// // }, 1500);

// // let counter = 0;

// // const interval = setInterval(function () {
// //   if (counter === 5) {
// //     clearInterval(interval);
// //   } else {
// //     console.log(++counter);
// //   }
// // }, 1000);

// //arrow functionsfunction greet(name) {
// function greet(name) {
//   console.log("Hello - ", name);
// }

// const arrow = (name, age) => {
//   console.log("Hello - ", name, age);
// };
// const arrow2 = (name, age) => console.log("Hello my name is ", name, age);

// function pow(num, exp) {
//   return Math.pow(num, exp);
// }

// const pow2 = (num, exp) => Math.pow(num, exp);
// arrow2("batyrhan", 45);

// // console.log(pow2(2, 3));

// // Default parameters

// const sum = (a = 20, b = 2) => a + b;

// console.log(sum());

// function sumAll(...numbers) {
//   //   let res = 0;
//   //   for (let num of numbers) {
//   //     res += num;
//   //   }

//   //   return res;

//   return numbers.reduce((acc, cur) => (acc += cur), 0);
// }

// console.log(sumAll(1, 2, 3, 4, 5));

// //closures   замыкания

// function createPerson(name) {
//   return function (lastname) {
//     console.log(name + " " + lastname);
//   };
// }

// const addLastName = createPerson("Batyrhan");

// addLastName("Danilov");
