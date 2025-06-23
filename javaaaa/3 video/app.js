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

// const person = {
//   name: "Batya",
//   age: 144,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//   },
// };

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
//======================================================================
// 5 урок promises

// console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data,....");
//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data,....");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//       // console.log("Data received", backendData);
//     }, 2000);
//   });
//   // p2.then((clientData) => {
//   //   console.log("Data received", clientData);
//   // });
// })
//   .then((clientData) => {
//     // console.log("Data received", clientData);
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log("Modified data", data);
//   })
//   .catch((err) => console.error("rroreoroe", err))
//   .finally(() => {
//     console.log("Finally");
//   });

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("after 2 seconds"));
// sleep(3000).then(() => console.log("after 3 seconds"));

// Promise.all([sleep(5000), sleep(8000)]).then(() => {
//   console.log("All promises");
// });

// Promise.race([sleep(5000), sleep(8000)]).then(() => {
//   console.log("Race promises");
// });

//========================================================================

//6 урок  Объекты с Object.create. Что такое getters, setters

// const person = Object.create(
//   {
//     calculateAge() {
//       console.log("Age:", new Date().getFullYear() - this.birthYear);
//     },
//   },
//   {
//     name: {
//       value: "Batyrhan",
//       enumerable: true,
//       writable: true,
//       configurable: true, //сможем удалить значение, а фолс не сможем
//     },
//     birthYear: {
//       value: 2003,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear;
//       },
//       set(value) {
//         document.body.style.background = "green";
//         console.log("Set age", 100);
//       },
//     },
//   }
// );

// // person.name = "Maxim";
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log("key", key, person[key]);
//   }
// }

//===========================================================
// Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)

// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// };
// class Animal {
//   static type = "ANIMAL";

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//   voice() {
//     console.log("I am Animal");
//   }
// }
// // const animal = new Animal({
// //   name: "Animal",
// //   age: 5,
// //   hasTail: true,
// // });

// class Cat extends Animal {
//   static type = "CAT";
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log("I am cat");
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }
// const cat = new Cat({
//   name: "Cat",
//   age: 7,
//   hasTail: true,
//   color: "black",
// });

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }

//   show() {
//     this.$el.style.display = "block";
//   }
// }
// class Box extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });
// const box2 = new Box({
//   selector: "#box2",
//   size: 20,
//   color: "blue",
// });
// class Circle extends Box {
//   constructor(optinos) {
//     super(optinos);
//     this.$el.style.borderRadius = "50%";
//   }
// }
// const c = new Circle({
//   selector: "#circle",
//   size: 90,
//   color: "green",
// });

//=====================================================
//Урок 8. JavaScript. Как работает Async, Await. Работа с сервером c fetch
const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};
// delay(2000).then(() => console.log("2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos";
// function fetchTodos() {
//   console.log("Fetch todo started...");
//   return delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then((response) => response.json());
// }
// fetchTodos()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((e) => console.error(e));

// async function fetchAsyncTodos() {
//   console.log("Fetch todo started...");
//   try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("Data: ", data);
//   } catch (e) {
//     console.error(e);
//   } finally {
//   }
// }

// fetchAsyncTodos();
//=======================================================
//Урок 9. JavaScript. Proxy. Объекты, функции, классы. Часть 1~~~~~~~~~~~~~~~~~~~~~~~~~~

// const person = {
//   name: "batya",
//   age: 12,
//   job: "fullstack",
// };

// const op = new Proxy(person, {
//   get(target, prop) {
//     console.log(`getting prop ${prop}`);
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error(`No ${prop} field in target`);
//     }
//   },
//   has(target, prop) {
//     return ["age", "name", "job"].includes(prop);
//   },
//   deleteProperty(target, prop) {
//     console.log("deleting...", prop);
//     delete target[prop];
//     return true;
//   },
// });

// //Functions

// const log = (text) => `Log: ${text}`;

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log("Calling fn...");

//     return target.apply(thisArg, args).toUpperCase();
//   },
// });

// //Classes

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log("Construct....");
//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log(`Getting prop ${prop}`);
//         return t[prop];
//       },
//     });
//   },
// });

// const p = new PersonProxy("Maxim", 30);

//=================================================================================
//10 УРОК PROXY ЧАСТЬ 2

// wrapper
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
);
// console.log(position);

// hidden properties

// const withHiddenProps = (target, prefix = "_") => {
//   return new Proxy(target, {
//     has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
//     ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in reciever ? obj[prop] : void 0),
//   });
// };
// const data = withHiddenProps({
//   name: "Batyrhan",
//   age: 23,
//   _fdfd: "1231231",
// });
// console.log("2" - 1);
//на сайте 2.7 преобразование типов
//Урок 11. JavaScript. Генераторы. Symbol iterator, for of
// function* strGenerator() {
//   yield "H";
//   yield "e";
//   yield "l";
//   yield "l";
//   yield "o";
//   yield "H";
//   yield "H";
// }
// const str = strGenerator();

// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }
// const num = numberGen(7);

// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0;
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// function* iter(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }

// for (let k of iter()) {
//   console.log(k);
// }
//Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.
const people = [
  { name: "BBBBBBDDDDDSSSS", age: 22222, budget: 2 },
  { name: "BBBBDSSSS", age: 7, budget: 2232 },
  { name: "BBBBBBDDSSSS", age: 12, budget: 2232 },
  { name: "BBBBBBDDDDDSSSS", age: 3, budget: 43443 },
  { name: "BBBBBBDDDDSSSS", age: 22, budget: 676676 },
  { name: "BBBSS", age: 22222, budget: 5555 },
  { name: "BBBkhkhku", age: 62, budget: 4 },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
// for (let person of people) {
//   console.log(person);
// }

//FOREACH

// people.forEach(function (person, index, pArr) {
//   console.log(person);
//   console.log(index);
//   console.log(pArr);
// });

// people.forEach((person) => console.log(person));

//Map

const newPeople = people.map((person) => `${person.name} (${person.age})`);
// console.log(newPeople);

//FILTER
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);

const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

//REDUCE

const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log(amount);

//Find

let ppp = people.find((person) => person.name === "BBBSS");
// console.log(ppp);

//FindIndex
let pppindex = people.findIndex((person) => person.name === "BBBSS");
// console.log(pppindex);

//======================================================

const newPeople2 = people
  .filter((person) => person.budget > 3400)
  .map((person) => {
    return {
      info: `${person.name}  (${person.age})`,
      budget: Math.sqrt(person.budget),
    };
  })
  .reduce((total, person) => total + person.budget, 0);
// console.log(newPeople2);
//========================================================================================================================
//Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами

//Урок 15. JavaScript. Все о Spread и Rest
const citiesRussia = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
const citiesEurope = ["Берлин", "Прага", "Париж"];
const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
};

const citiesEuropeWithPopulation = {
  Moscow: 25,
  Berlin: 10,
  Praha: 3,
  Paris: 2,
};

//SPREAD

// console.log(...citiesRussia);
// console.log(...citiesEurope);

// const allCities = [...citiesRussia, "Вашингтон", ...citiesEurope];
// console.log(allCities);

// console.log({ ...citiesRussiaWithPopulation });
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation });

//practice
// const numbers = [5, 34, 22, 11, 23, 42];
// console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...numbers));

// const divs = document.querySelectorAll("div");
// console.log(divs);
// const nodes = [...divs];
// console.log(nodes);

//Rest

function sum(a, b, ...rest) {
  console.log(rest);
  return a + b + rest.reduce((a, i) => a + i, 0);
}
const numbers = [1, 2, 3, 4, 5];
//SPEAD!!!!!
// console.log(sum(...numbers));

// const a = numbers[0];
// const b = numbers[1];

const [a, b, ...other] = numbers;

// console.log(a, b, other);

// const person = {
//   name: "Max",
//   age: 20,
//   city: "Ufa",
//   country: "Moscow",
// };
// const { name, age, ...address } = person;

// console.log(name, age, address);

//Урок 16. JavaScript. Все о Деструктуризации в JS

function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}
const [sum2, sub = "BLYAAAAAAAA", mult, ...other2] = calcValues(42, 10);
// const sum2 = result[0];
// const sub = result[1];

// const [sum2, sub] = result;

// console.log(sum2, mult, other2, sub);

//OBJECts

const person = {
  name: "Max",
  age: 20,
  address: {
    country: "Russia",
    city: "Moscow",
  },
};

// const {
//   name: firstname = "BEZ imeni",
//   age,
//   car = "audi",
//   address: { city: homeTown, country },
// } = person;

const { name, ...info } = person;

// console.log(firstname, age, car, homeTown, country);

// console.log(name, info);

// function logPerson({ name, age }) {
//   console.log(name + " " + age);
// }

// logPerson(person);

//========================================================================

//Урок 17. JavaScript. Все о LocalStorage

const myNumber = 42;

// localStorage.removeItem("number");
// console.log(localStorage.getItem("number"));
// localStorage.setItem("number", myNumber.toString());
// console.log(localStorage.getItem("number"));
// localStorage.clear();

const person2 = {
  name: "Max",
  age: 20,
};

// localStorage.setItem("person", JSON.stringify(person2));
const raw = localStorage.getItem("person");
const rawParsed = JSON.parse(raw);
rawParsed.name = "Batyrhan";
// console.log(rawParsed);

//==========================================================================

window.addEventListener("storage", (event) => {
  console.log(event);
});
