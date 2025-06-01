// const car123 = {
//   model: "tesla",
//   year: 2023,
// };

// const json = JSON.stringify(car123);
// const parsed = JSON.parse(json);

// console.log(json);
// console.log(parsed);

const list = document.getElementById("list");
const filter = document.getElementById("filter");
let USERS = [];

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "Loading Blyat nahui";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setTimeout(() => {
      USERS = data;
      render(data);
    }, 2000);
  } catch (err) {
    list.innerHTML = err.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No match users!";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `
    <li class = "list-group-item">${user.name}</li>
    `;
}

start();
