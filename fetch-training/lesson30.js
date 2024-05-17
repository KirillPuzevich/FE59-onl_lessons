const allElement = document.createElement('p');
allElement.classList.add('bottom_block__items-all');
allElement.textContent = 'All: ';
allElement.style.marginLeft = '16px'

const completedElement = document.createElement('p');
completedElement.classList.add('bottom_block__items-completed');
completedElement.textContent = 'Completed: ';

const parentElement = document.querySelector('.bottom_block__items');

parentElement.insertBefore(completedElement, parentElement.firstChild);
parentElement.insertBefore(allElement, parentElement.firstChild);

const ul = document.querySelector('.bottom_block');

const createToDo = ({id, date ,text, isChecked}, uniqueIdItem) => {
  const todoItem = document.createElement("li");
      todoItem.classList.add("bottom_block-container");
      todoItem.id = id;

      const uniqueLocalId = uniqueIdItem || id.split('-').at(-1)

      todoItem.innerHTML = `
          <input class="bottom__block-check" type="checkbox" id="todo-completed-${uniqueLocalId}" ${isChecked ? 'checked' : ''}>
          <p class="bottom_block-first__text"">${text}</p>
          <button class="bottom_block-first__btn" id="todo-delete-${uniqueLocalId}">x</button>
          <p class="bottom_block-first__dec" >${date}</p>
          `;

          if (isChecked) {
            todoItem.classList.add('todo__item_completed');
          }
      ul.append(todoItem);
      updateAllElementText();
};

const updateAllElementText = () => {
  const allTodos = getDate();
  allElement.textContent = `All: ${allTodos.length}`;
}

const updateCompletedElementText = () => {
  const allTodos = getDate();
  const completedTodos = allTodos.filter(todo => todo.isChecked).length;
  completedElement.textContent = `Completed: ${completedTodos}`;
}

export const deleteAll = () => {
  const todoList = document.querySelector('.bottom_block');
  todoList.innerHTML = '';
  localStorage.clear();
  updateAllElementText();
  updateCompletedElementText();
};

export const deleteLast = () => {
  const todoItems = document.querySelectorAll('.bottom_block-container')
  const lastItem = todoItems[todoItems.length - 1];
  lastItem.remove();

  const deletLastTodos = getDate();
  if (deletLastTodos.length > 0) {
    deletLastTodos.pop();
    setDate(deletLastTodos);
  }
  updateAllElementText();
  updateCompletedElementText();
};

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

let uniqueIdItem = 1;

export const handleClickCreate = (itemsInput) => {
  const inputText = itemsInput.value;
  

  if (inputText) {
    
    const id = `todo-item-${uniqueIdItem}`;
    const date = new Date().toLocaleDateString();
    createToDo({id, date, text: inputText, isChecked: false}, uniqueIdItem)

    const todo = {
      id,
      text: inputText,
      date,
      isChecked: false,
    };

    let allTodos = getDate();
 
    allTodos.push(todo);

    setDate(allTodos);

    itemsInput.value = '';
    ++uniqueIdItem;
    updateAllElementText();
  }
}

const deleteToDo = (event) => {
const id = event.target.parentElement.id;
  const liId = `todo-item-${id.split('-').at(-1)}`
  const currentLi = ul.querySelector(`#${liId}`);;

  ul.removeChild(currentLi);

  const allTodos = getDate();
  const itemIndex = allTodos.findIndex(todo => todo.id === liId);
  if (itemIndex !== -1) {
    allTodos.splice(itemIndex, 1);
    setDate(allTodos);
  }
  updateAllElementText();
  updateCompletedElementText();
}

const clickCheck = (event) => {
  const id = event.target.parentElement.id;
  const liId = `todo-item-${id.split('-').at(-1)}`
  const currentLi = ul.querySelector(`#${liId}`);
  
  currentLi.classList.toggle('todo__item_completed')
  const allTodos = getDate();
  const itemIndex = allTodos.findIndex(todo => todo.id === liId);
  if (itemIndex !== -1) {
    allTodos[itemIndex].isChecked = !allTodos[itemIndex].isChecked;
    setDate(allTodos);
  }
  updateCompletedElementText();
}


export const handleClickUl = (event) => {

  if (event.target.classList.contains('bottom_block-first__btn')) {
    deleteToDo(event);
  }

  if (event.target.classList.contains('bottom__block-check')) {
    clickCheck(event);
  }
};

function loadTodos() {
  const todoData = getDate();

  todoData.forEach((item, index, array) => {
    createToDo(item, null, ul);
    if (index === array.length - 1) {
      
      const lastNumberId = item.id.split("-").at(-1);
      uniqueIdItem = +lastNumberId + 1;
    }

  updateAllElementText();
  updateCompletedElementText();
})
}
loadTodos()

export const searchField = (event, ul) => {

  const searchText = event.target.value;

  const localStorageData = getDate();
  
  
  const searchedToDos = localStorageData.filter(todo => {

      return todo.text.includes(searchText);
  })

  console.log(localStorageData, searchedToDos);

  ul.innerHTML = '';

  searchedToDos.forEach(item => {
    createToDo(item);
  });
}

export const showCompleted = (ul) => {
  const localStorageData = getDate();
  const completedTodos = localStorageData.filter(todo => todo.isChecked);

  ul.innerHTML = '';

  completedTodos.forEach(item => {
    createToDo(item);
  });
};

export const showAll = (ul) => {
  const localStorageData = getDate();
  
  ul.innerHTML = '';

  localStorageData.forEach(item => {
    createToDo(item);
  });
};

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json()) 
//     .then(response => {
//         const ul = document.querySelector('.bottom_block');

//         response.forEach(item => {
//             createToDo({ id: String(item.id), date: item.userId, text: item.title, isChecked: item.completed}, null, ul);
//         })
//     })

function loadedTodos(todoId) {
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  return fetch(url)
      .then(response => response.json())
      .then(item => {
          const ul = document.querySelector('.bottom_block');
          createToDo({ id: String(item.id), item: item.userId, text: item.title, isChecked: item.completed }, null, ul);
      });
}

loadedTodos(15)
  .then(() => loadedTodos(23))
  .then(() => loadedTodos(7))
  .then(() => loadedTodos(3))
  .catch(error => console.log(error));

