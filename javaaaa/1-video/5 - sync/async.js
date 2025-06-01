//event loop

// const timeout = setTimeout(() => {
//   console.log("after 2 seconds");
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
//   console.log("after 5 seconds");
// }, 5000);

// setInterval(() => {
//   console.log("tick");
// }, 1000);

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }
// delay(() => {
//   console.log("timeout");
// }, 2000);

//promisi

// const delay = (time = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([1, 2, 3]);
//       //   reject("error in delay");
//     }, time);
//   });
//   return promise;
// };

// delay(2500)
//   .then((data) => {
//     console.log("timeout", data);
//     return data.map((x) => x ** 2);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("Finally"));

const getData = () => new Promise((resolve) => resolve([1, 2, 3]));

// getData().then((array) => console.log(array));

async function asyncExample() {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally");
  }
}
asyncExample();
