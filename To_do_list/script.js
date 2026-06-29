const todoList = [
  {
    name: "do the laundry",
    dueDate: "2026-06-29",
  },
  {
    name: "prepare lunch",
    dueDate: "2026-06-29",
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
        <div>${name}</div>
        <div>${dueDate}</div>
        <input
          class="due_date_input" 
          type="date" 
          value="${dueDate}"
        >
        <button 
          class = "delete_btn" 
          onclick = "
            todoList.splice(${i}, 1);
            listingOnPage();
        ">
          <img 
            src = "images/icon_delete.png" 
            alt = "delete icon"
          >
        </button>
      </div>`;
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
