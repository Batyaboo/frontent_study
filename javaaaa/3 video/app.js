//Прототип

// const person = new Object({
//   name: "Batya",
//   age: 144,
//   greet: function () {
//     console.log("Greet!");
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello!");
// };

// const lena = Object.create(person);
// lena.name = "Elena";

//контекст this

function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Batya",
  age: 144,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
  },
};

const lena = {
  name: "Lena",
  age: 23,
};
// person.logInfo.bind(lena, "Frontend", "89983883838")();
// person.logInfo.call(lena, "Frontend", "89983883838");
// person.logInfo.apply(lena, ["Frontend", "89983883838"]);

//==================================
const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(2));

// ЗАМЫКАНИЯ

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addTen(41));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));

// console.log(ruUrl("yandex"));
// console.log(ruUrl("vkontakte"));

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
