//theory

// const array = [1, 2, 3, 4, 60, 42];
// // const arrayStrings= ['a', 'b', null, 12]
// // const array = new Array(1, 2, 3, 4, 20, 342);

// // console.log(array.length);
// console.log(array[array.length - 1]);
// array[0] = "privet!";
// console.log(array);

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);

// const notes = ["аыалыалылаыла", "щвыщвоф ов щфыовщфово фв", 24242, 34343];

// function render() {
//   for (let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
//   }
// }
// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }

//   //   listElement.innerHTML = ;

//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `
//     <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//     </li>`;
// }

// //object theory

// const person = {
//   firstName: "Batyrhan",
//   lastName: "khamiitovvvvvvvvvv",
//   year: 100023,
//   hasGirlfriend: true,
// };
// console.log(person.firstName);

// console.log(person["year"]);

const notes = [
  {
    title: "Записать блок про массивы",
    completed: false,
  },
  {
    title: "Показать пенис",
    completed: true,
  },
];
function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p> Нет элементов</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
    render();
  }
};

function getNoteTemplate(note, index) {
  return `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class="${
              note.completed ? "text-decoration-line-through" : ""
            }">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${
                  note.completed ? "warning" : "success"
                }" data-index="${index}" data-type = "toggle" >&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type = "remove" >&times;</span>
            </span>
    </li>`;
}
