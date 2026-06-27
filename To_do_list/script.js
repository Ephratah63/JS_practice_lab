const todoList = ["do the laundry", "prepare lunch"];
listingOnPage();
function listingOnPage() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<div>
      <p>${todo}</p>
      <button class="delete_btn" onclick="
        todoList.splice(${i}, 1);
        listingOnPage();
        "><input class="text" type="date" value="2026-02-18">
        <img 
          src="images/icon_delete.png" alt="delete icon" style="width: 20px; height: 12px">
      </button>
    </div>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".todo_list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".name-input");
  const name = inputElement.value;
  console.log(name);

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";

  listingOnPage();
}
