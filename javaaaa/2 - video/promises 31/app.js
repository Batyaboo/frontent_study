// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("error"), 1000);
// });

// console.log(promise);
// promise
//   .then((x) => {
//     console.log(x);
//     return x;
//   })
//   .then((y) => console.log(y))
//   .catch((err) => console.log(err));

// promise.then((z) => console.log(z));

//fetch

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((posts) => console.log(posts))
//   .catch((err) => console.log(err));

// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((post) => resolve(post))
//       .catch((err) => reject(err));
//   });
// }
// getPost(1).then((post) => console.log(post));

function getPost2(id) {
  const [userType, userId] = id.split("-");
  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
    (response) => response.json()
  );
}
// getPost2("user-1")
//   .then((post) => console.log(post))
//   .catch((err) => console.log(err));

function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-");
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
      (response) => response.json()
    );
  });
}
// getPost3("user-1")
//   .then((post) => console.log(post))
//   .catch((err) => console.log(err));

//ACYNC AWAIT

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(response);
}
getPost(1);
