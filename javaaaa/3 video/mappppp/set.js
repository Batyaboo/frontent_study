const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

// console.log(set);

set.add(10).add(20).add(30).add(20);
// console.log(set);

// console.log(set.has(42));
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.size);
// console.log(set.clear());
// console.log(set.size);

// console.log(set.keys());
// console.log(set.entries());

// for (let key of set) {
//   console.log(key);
// }
//========================================

function uniqValues(array) {
  return [...new Set(array)];
}
console.log(
  uniqValues([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 555, 5, 5, 55, 5])
);
