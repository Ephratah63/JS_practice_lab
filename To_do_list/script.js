const todoList = [
  {
    name: "Do the laundary",
    dueDate: "2026-07-09",
  },
  {
    name: "Prepare lunch",
    dueDate: "2026-06-24",
  },
];

listingOnPage();

function listingOnPage() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    // shorter version; const{name}=todoObject;
    const dueDate = todoObject.dueDate;
    //shorter shorter version; const{name, dueDate}=todoObject;

    //process called; generating HTML
    const html = `
      <div class="todo_list_grid">
        <span>${name}</span>
        <span>${dueDate}</span>
        <button class = "delete_btn" onclick = "todoList.splice(${i}, 1); listingOnPage();"><img src = "images/icon_delete.png" alt = "delete icon"></button>
      </div>
    `;
    todoListHTML += html;
  }
  document.querySelector(".todo_list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".add_task");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".due_date_input");
  const dueDate = dateInputElement.value;

  //to check if both fields have values
  if (name && dueDate) {
    todoList.push({
      name: name,
      dueDate: dueDate,
      //shorter version;
      // name,
      //dueDate
    });

    //clear name input
    inputElement.value = "";
    //clear due date input
    dateInputElement.value = "";

    listingOnPage();
  } else {
    //console.log("Please fill in both fields.");
    alert("Please fill in both fields.");
  }
}
