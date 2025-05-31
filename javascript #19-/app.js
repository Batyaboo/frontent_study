// var arr = [1, 2, 3, 4, 5];

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce((sum, current) => {
//   return sum + current;
// });

// alert(result); // 15

//some/every

// const numArr = [10, 232, 3, 4, 2, 400, 2030, 103, 30, 24];
// numArr.sort((prev, next) => prev - next);
// console.log(numArr);

//Методы объектов

//копирование объектов

// let obj1 = {
//   name: "batyr",
//   info: {
//     skills: ["html", "css"],
//   },
// };
// let obj2 = {
//   name: "ivan",
//   age: 20,
// };

// // let newObj = obj1; //не рабоатает
// //Неглубокое копирование
// let newObj = Object.assign({}, obj2, obj1);
// newObj = Object.assign({}, obj1);

// //Глубокое копирование
// let objJSON = JSON.stringify(obj1);
// newObj = JSON.parse(objJSON);
// // console.log(newObj);

// let keys = Object.keys(obj2);
// console.log(keys);
// let values = Object.values(obj2);
// console.log(values);
// let entries = Object.entries(obj2);
// console.log(entries);

//21 видео деструктуризация
// const user = {
//   firstName: "Batyr",
//   lastName: "Khamitov",
//   age: 30,
//   info: {
//     work: "EasyCode",
//     skills: ["html", "css"],
//   },
// };
// // const firstName = user.firstName
// // const lastName = user.lastName;

// // const { firstName: name, lastName, age: years = 30 } = user;
// // console.log(name, years);

// // const {
// //   info: { work, skills },
// // } = user;
// // // console.log(skills);

// //деструкторизация массивов
// const colors = ["white", "black", "red"];
// const [w, b, r] = colors;
// // console.log(w, b, r);
// const names = ["denis", "Batyr", "Ustya"];
// const [, name2, name3] = names;
// // console.log(name2);
// // console.log(...names);

// const colocccrNames = [...colors, ...names];
// // console.log(colocccrNames);

// const newUser = { ...user, age: 301 };
// // console.log(newUser);

// const {
//   info: {
//     skills: [html, css],
//   },
// } = newUser;
// // console.log(html, css);

// function myPerson({ lastName, firstName } = {}) {
//   console.log(lastName, firstName);
// }
// // myPerson(newUser);

// // function foo(x, y, ...others) {
// //   const [...args] = arguments;
// //   console.log(others);
// // }
// // foo(1, 2, 4, 23, 23333);
// const numbers = [2, 4, 14, 5];
// function foo2(x, y, b, a) {
//   console.log(x, y, b, a);
// }
// foo2(...numbers);

//23 Работа с атрибутами

console.log(numbers);
console.log(div);
