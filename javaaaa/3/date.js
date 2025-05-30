// const now = new Date();

// const start = new Date(1000 * 60 * 60 * 24 * 365);

// const date = new Date(2001, 0, 4, 12, 42, 12);

// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());

// now.setFullYear(2055);

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleTimeString());
// console.log(now.toLocaleDateString());

// ========================

// const now = new Date();

let mode = "full";

const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");
dateBtn.onclick = bindMode("date");
timeBtn.onclick = bindMode("time");

setInterval(update, 100);
update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();

    case "date":
      return now.toLocaleDateString();

    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString;
  }
}
