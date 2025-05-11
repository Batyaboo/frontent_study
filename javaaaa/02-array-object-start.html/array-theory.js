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

const capitalNames = names.map(function (name, index) {
  if (index === 1) {
    return "Elena Velikaya";
  }
  return name;
});
console.log(capitalNames);
