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
    console.log("Greet from person");
  },
  arrow: () => {
    console.log("person arrow");
  },
  info() {
    console.log("Person name", person.name);
  },
};
console.log(person);
person.greet();
person.arrow();
person.info();
