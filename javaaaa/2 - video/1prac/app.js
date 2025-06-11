// //
// const firstName = "Batyrhan";
// const lastName = "Khamitov";
// const age = 16;

// let str;

// str = "Hello my name is " + firstName + " " + lastName;
// str =
//   "<ul>" +
//   "<li>First name: " +
//   firstName +
//   "</li>" +
//   "<li>Last name: " +
//   lastName +
//   "</li>" +
//   "<li>Age: " +
//   age +
//   "</li>";
// ("</ul>");
// // console.log(str);

// str = `
//     <ul>
//         <li>First name: ${firstName}</li>
//         <li>Last name: ${lastName}</li>
//         <li>Age: ${age}</li>
//         <li>Math.random: ${Math.floor(Math.random() * 11)}</li>
//     </ul>
// `;

// document.body.innerHTML = str;

//==============================================================================================================================================================================================================================
// const user = {
//   firstName: "Den",
//   age: 2121,
//   isAdmin: true,
//   email: "Batyrhanhamitov@gmail.com",
//   "user-address": {
//     city: "Ufa",
//   },
//   skills: ["fafafa", "fafafaf"],
// };
// let value;

// let prop = "email";

// value = user.firstName;
// value = user["isAdmin"];
// value = user["user-address"]["city"];
// value = user[prop];
// user.firstName = "Batyaboo";
// user.info = "some info";

// console.log(value);
// console.log(user);

// let value = "a".charCodeAt();

// console.log(value);

// const numArr = [2, 22, 1324, 42];

// let value;
// value = numArr.length;
// value = Array.isArray(numArr);

// value = numArr[2];
// numArr[2] = 10;

// value = numArr.indexOf(2);

// value = numArr.push(100);
// value = numArr.pop();

// value = numArr.unshift(111);
// value = numArr.shift();
// value = numArr.slice(1, 3);
// value = numArr.splice(1, 2, "one", "two");

// value = numArr.reverse();
// value = numArr.concat(numArr);
// value = numArr.join(" ");
// value = "hello world".split("");
// console.log(value, numArr);

// function foo() {
//   console.log("Hello");
// }
// foo();

// foo.fielf = "Denic";

// console.log(foo.fielf);

// const arr = ["Denis", "Ivan", "AMAls"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr2 = [];
const names = ["Denis", "Ivan", "AMAls", "Batyrhjanhadadada"];
// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLength(el) {
//   console.log(el);
//   return el;
// }

// function nameToUpperCase(el) {
//   return el.toUpperCase();
// }
// const result = mapArray(names, nameLength);
// const result2 = mapArray(names, nameToUpperCase);
// console.log(result2);

// function greeting(firstName) {
//   return function (lastName) {
//     return `Hello ${firstName} ${lastName}`;
//   };
// }
// // const testGreeting = greeting("Batyrhan");
// // const fullname = testGreeting("Khamitov");

// const fullname = greeting("batyrhanadsad")("Khanitv");

// console.log(fullname);

// function question(job) {
//   const jobDictionary = {
//     developer: "Что такое лалалала",
//     teacher: "Что тако бумбумбум",
//   };
//   return function (name) {
//     return `${name}, ${jobDictionary[job]}?`;
//   };
// }
// const developerQuestion = question("developer");
// console.log(developerQuestion("Batyrhan"));
// const teacherQuestion = question("teacher");
// console.log(teacherQuestion("Batyrhan"));

//THIS

// function getThis() {
//   console.log(this);
// }
// getThis();

// const prod1 = {
//   name: "Intel",
//   price: 100,
//   getPrice: function () {
//     console.log(this.price);
//   },
// };
// prod1.getPrice();

// function getPrice(currency = "$") {
//   console.log(currency + this.price);
//   return this;
// }

// const prod3 = {
//   name: "dbabda",
//   price: 1200,
//   getPrice,
// };
// getPrice.call(prod3, "&");
// getPrice.apply(prod3, ["*"]);/////////////////////////////////

// const getPriceBind = prod3.getPrice.bind(prod3);
// console.log(getPriceBind);
// setTimeout(getPriceBind, 1000);

//arrow function

// const plus = (x, y) => x + y;

// // function plusFoo(x, y) {
// //   return x + y;
// // }
// const plusRes = plus(1, 2);
// console.log(plusRes);

// const withoutArgs = () => console.log("Hello world");
// const singleArg = (x) => x * 2;
// const moreActions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a + b;
// };
// const returnObj = (str = "") => ({
//   value: str,
//   length: str.length,
// });

// const obj = {
//   firstName: "Denis",
//   age: 20,
//   getFisrtName() {
//     console.log(this);
//   },
//   getAgeArraow: null,
//   getAge() {
//     // this.getAgeArraow = () => console.log(this);
//     setTimeout(() => console.log(this));
//   },
// };
// obj.getAge();
// // obj.getAgeArraow();

// forEach -метод перебора массива
//filter
// map возвращает новый массив
//reduce
//some/every
//sort
//find
// const users = [
//   {
//     adada: "fsfsfsfs",
//     age: 123,
//   },
//   {
//     adada: "fsfsfsfs",
//     age: 123,
//   },
// ];
// //forEach
// // users.forEach((user, i, arr) => {
// //   console.log(user, i, arr);
// // });

// //filter
// const userLess30 = users.filter((user) => user.age > 30);
// console.log(userLess30);

// //map
// const usersName = users.map((user) => user.adada);
// console.log(usersName);

// //

//22 Видео  введение в dom

// const div = document.querySelector("div");
// const titles = document.querySelectorAll("h1");
// // const h1 = document.getElementsByTagName("h1");
// // console.log(h1);
// // console.log(titles);
// // console.log(Array.from(titles));

// // console.log(div.parentElement);

// const link = div.querySelector(".link");
// // console.log(link);

// // console.log(link.closest(".content"));
// div.classList.add("article", "custom");
// div.classList.remove("article");
// // console.log(div.classList);
// // console.log(link.href);

// div.setAttribute("id", "myId");
// // div.getAttribute("id");
// // div.removeAttribute("id");
// // div.hasAttribute("id");
// // div.dataset;

//24 Манипуляция  DOM

// const title = document.querySelector("h1");
// title.innerHTML = "<span>text</span>";
// title.textContent = "new text";
// title.appendChild;
// title.insertAdjacentHTML("afterend", "<h2>title h2 </h2>");

// title.innerHTML += "<span>new text</span>";
// const span = title.querySelector("span");
// console.log(span);
// title.innerHTML += "<span>new text2</span>";
// span.textContent = "adadasdsa";

//СОЗДАНИЕ ЭЛЕМЕНТА
// const span = document.createElement("span");
// span.textContent = "fafafafasssssssssssssssss";
// span.classList.add("myClass");
// // console.log(span);
// title.appendChild(span);

// // div.appendChild(span);

// const fragment = document.createDocumentFragment();
// const colors = ["black", "yellow", "orange"];
// colors.forEach((color) => {
//   const item = document.createElement("div");
//   item.classList.add(`bg-${color}`);
//   item.style.background = color;
//   item.textContent = color;
//   fragment.appendChild(item);
// });

// document.body.appendChild(fragment);

// //Удаление элементов
// title.remove();

//СОБЫТИЯ 25 видео
const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function () {
//   console.log("click");
// };

// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

// btn.addEventListener("click", function () {
//   console.log("click2");
// });
// btn.addEventListener("click", (e) => {
//   console.log(this);
//   console.log(e);
// });
// function clickhandler(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log("click");
// }

// link.addEventListener("click", clickhandler);

// link.removeEventListener("click", clickhandler);
// const container = document.querySelector(".container");

// btn.addEventListener("click", (e) => {
//   const div = document.createElement("div");
//   const nestedBtn = document.createElement("button");
//   div.textContent = Math.floor(Math.random() * 11);
//   nestedBtn.textContent = "button";
//   container.appendChild(div);
//   div.appendChild(nestedBtn);
// });
// container.addEventListener("click", (e) => {
//   console.dir(e.target);
//   if (e.target.tagName === "BUTTON") {
//     console.log("buttton clicked");
//   }
// });

//26 видео Всплытие и перехват события
