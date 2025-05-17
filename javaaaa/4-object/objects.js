const person = {
  name: "Batyrhan",
  age: 29,
  isYoutuber: false,
  languages: ["ru", "en"],
  address: {
    city: "Ufa",
    street: "Salavat Yulaev",
  },
  "complex key": "complex",
  ["key_" + 21 * 2]: "computed value",
  greet() {
    console.log("Greet from person", this);
  },
  arrow: () => {
    console.log("person arrow", this);
  },
  info() {
    console.log("Person name", this.name);
  },
};
// console.log(person);
// person.info();
// person.greet();
// person.arrow();
// console.log(person.address);
// // console.log(person["complex key"]);

// person.age++;

// console.log(person.age);

// person.languages.push("de");
// console.log(person.languages);

// person.address = undefined;

// delete person.address;

// const { age, name, languages } = person;

// console.log(age, name, languages);

// for (let key in person) {
//   // console.log(key);
//   console.log(person[key]);
// }
