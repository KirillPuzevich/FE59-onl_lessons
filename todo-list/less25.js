const allElement = document.createElement('p');
allElement.classList.add('bottom_block__items-text');
allElement.textContent = 'All: 2';
allElement.style.marginLeft = '16px'

const completedElement = document.createElement('p');
completedElement.classList.add('bottom_block__items-text');
completedElement.textContent = 'Completed: 1';

const parentElement = document.querySelector('.bottom_block__items');

parentElement.insertBefore(completedElement, parentElement.firstChild);
parentElement.insertBefore(allElement, parentElement.firstChild);

const addButton = document.querySelector('.top__block-items_add');
const ul = document.querySelector('.bottom_block');
const deleteAllButton = document.querySelector('.top__block-delete_all');
const check = document.querySelectorAll('.bottom__block-check')
const deleteLastButton = document.querySelector('.top__block-delete_last');

deleteAllButton.addEventListener('click', () => {
  const todoList = document.querySelector('.bottom_block');
  todoList.innerHTML = '';
  localStorage.clear();
});


deleteLastButton.addEventListener('click', () => {
  const todoItems = document.querySelectorAll('.bottom_block-container');
  const lastItem = todoItems[todoItems.length - 1];
  lastItem.remove();

  const deletLastTodos = getDate();
  if (deletLastTodos.length > 0) {
    deletLastTodos.pop();
    setDate(deletLastTodos);
  }
});


const checkboxes = document.querySelectorAll('.bottom__block-check');

let uniqueIdItem = 1;

const getDate = () => {
  const data = localStorage.getItem('todos');
  if (!data) {
    return []
  }
  return JSON.parse(data);
}


const setDate = (todos) => {

  localStorage.setItem('todos', JSON.stringify(todos));
}


addButton.addEventListener('click', () => {
  const itemsInput = document.querySelector('.top-block_items-input');
  const inputText = itemsInput.value;


  if (inputText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('bottom_block-container');
    const currentDate = new Date().toLocaleDateString();
    todoItem.id = `todo-item-${uniqueIdItem}`;

    todoItem.innerHTML = `
        <input class="bottom__block-check" type="checkbox" id="todo-completed-${uniqueIdItem}">
        <p class="bottom_block-first__text"">${inputText}</p>
        <button class="bottom_block-first__btn" id="todo-delete-${uniqueIdItem}">x</button>
        <p class="bottom_block-first__dec" >${currentDate}</p>
        `;

    ul.append(todoItem);

    const todo = {
      id: `todo-item-${uniqueIdItem}`,
      text: inputText,
      date: currentDate,
      isChecked: false,
    };

    let allTodos = getDate();
 
    allTodos.push(todo);

    setDate(allTodos);

    itemsInput.value = '';
    ++uniqueIdItem;
  }
})

const closeBtns = document.querySelectorAll('.bottom_block-first__btn');

const deleteToDo = (event) => {
const liId = event.target.parentElement.id;
const currentLi = ul.querySelector(`#${liId}`);
console.log(currentLi);

  ul.removeChild(currentLi);

  const allTodos = getDate();
  const itemIndex = allTodos.findIndex(todo => todo.id === liId);
  if (itemIndex !== -1) {
    allTodos.splice(itemIndex, 1);
    setDate(allTodos);
  }
}

const clickCheck = (event) => {
  const liId = event.target.parentElement.id;
  const currentLi = ul.querySelector(`#${liId}`);
  
  currentLi.classList.toggle('todo__item_completed')
  const allTodos = getDate();
  const itemIndex = allTodos.findIndex(todo => todo.id === liId);
  if (itemIndex !== -1) {
    allTodos[itemIndex].isChecked = !allTodos[itemIndex].isChecked;
    setDate(allTodos);
  }
}


ul.addEventListener('click', (event) => {

  if (event.target.classList.contains('bottom_block-first__btn')) {
    deleteToDo(event);
  }

  if (event.target.classList.contains('bottom__block-check')) {
    clickCheck(event);
  }
});

const todoList = localStorage.getItem('todos');

function loadTodos() {

  if (todoList) {
    const result = JSON.parse(todoList);
    uniqueIdItem = result.length + 1;

    result.forEach(item => {

      const todoItem = document.createElement("li");
      todoItem.classList.add("bottom_block-container");
      todoItem.id = item.id;
      const date = item.date;

      todoItem.innerHTML = `
          <input class="bottom__block-check" type="checkbox" id="todo-completed-${uniqueIdItem}" ${item.isChecked ? 'checked' : ''}>
          <p class="bottom_block-first__text"">${item.text}</p>
          <button class="bottom_block-first__btn" id="todo-delete-${uniqueIdItem}">x</button>
          <p class="bottom_block-first__dec" >${date}</p>
          `;

          if (item.isChecked) {
            todoItem.classList.add('todo__item_completed');
          }
      ul.append(todoItem);
    });
  }
}
loadTodos()
