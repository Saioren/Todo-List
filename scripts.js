const todoList = [];
  
  function renderTodoList(){
let todoListHTML = '';

todoList.forEach((todoObject, index)=>{
    const {name, dueDate} = todoObject;
    const html = `
    <input class"checkBox js-check-box" type="checkbox">
      <p>${name}</p>
      <p>${dueDate}</p>
      <button class"delete-button js-delete-button">Delete</button>
    
    `;
    todoListHTML += html;
});

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-button')
.forEach((deleteButton, index)=>{
deleteButton.addEventListener('click', () => {
todoList.splice(index, 1);
  renderTodoList();
});
});
}

document.querySelector('.js-add-button')
  .addEventListener('click', ()=>{
    addTodo();
  })
  
  function addTodo(){
    const inputElement = document.querySelector(".js-add-name");
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-add-date');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';
    renderTodoList();

  }