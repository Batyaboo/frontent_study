const names = ["Batyrhan", "elena", "igor", "ksenia"];

// names.push("alena");
// names.unshift("alena");

// const firstName = names.shift();
// const name = names.pop();

// console.log("Names: ", names, name);

// console.log(names.reverse());

// console.log(names.toReversed());
// console.log(names);

// const letters = ["e", "c", "b"];

// console.log(letters.sort());
// console.log(letters.toSorted());

// console.log(names.splice(2, 2));
// console.log(names.toSpliced(2, 2));

// console.log(names);

// const greatWoman = "elena";
// const index = names.indexOf(greatWoman);
// const newNames = names.with(index, "Elena Velikaya");
// console.log(names);
// console.log(newNames);

// const capitalNames = names.map(function (name) {
//   return name.toUpperCase();
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name, index) {
//   if (index === 1) {
//     return "Elena Velikaya";
//   }
//   return name;
// });
// console.log(capitalNames);

// console.log(names.includes('Igor'))

const people = [
  { name: "Batyrhan", budget: 4200 },
  { name: "elena", budget: 15100 },
  { name: "igor", budget: 300 },
  { name: "ksenia", budget: 7520 },
];

// console.log(people);

// let findedPerson;
// for (let person of people) {
//   if (person.budget === 7520) {
//     findedPerson = person;
//   }
// }

// const findedPerson = people.find(function (person) {
//   if (person.budget === 7520) { //или return person.budget === 7520
//     return true;
//   }
// });
// console.log(findedPerson);

// const finded = people.find((p) => p.budget === 7520);
// console.log(finded);

// let sumBudget = 0;
// const filtered = people.filter(function (p) {
//   return p.budget > 5000;
// });
// console.log(filtered);
// filtered.forEach(function (p) {
//   sumBudget += p.budget;
// });

// const sumBudget = people
//   .filter((p) => p.budget > 5000)
//   .map((p) => p.budget)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);

const string = "Privet, kak dela?";
const reversed = string.split("").toReversed().join("");
console.log(reversed);
