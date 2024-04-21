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
});


deleteLastButton.addEventListener('click', () => {
  const todoItems = document.querySelectorAll('.bottom_block-container'); 
  const lastItem = todoItems[todoItems.length - 1]; 
  lastItem.remove();
});

const checkboxes = document.querySelectorAll('.bottom__block-check');


addButton.addEventListener('click', () => {
    const itemsInput = document.querySelector('.top-block_items-input');
    const inputText = itemsInput.value;

    if (inputText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('bottom_block-container');
        const currentDate = new Date().toLocaleDateString();

        todoItem.innerHTML = `
        <input class="bottom__block-check" type="checkbox" id="check">
        <p class="bottom_block-first__text">${inputText}</p>
        <button class="bottom_block-first__btn">x</button>
        <p class="bottom_block-first__dec">${currentDate}</p>
        `;

        ul.append(todoItem);

        itemsInput.value = '';
    }
})

const closeBtns = document.querySelectorAll('.bottom_block-first__btn');
function deleteToDo(event) {
    const currentLi = event.target.parentElement;

    ul.removeChild(currentLi);
}

function clickCheck(checkbox) {
  const container = checkbox.parentElement;
  const todoText = container.querySelector('.bottom_block-first__text');

    if (checkbox.checked) {
      container.style.backgroundColor = 'gray'; 
      todoText.style.textDecoration = 'line-through'; 
    } else {
      container.style.backgroundColor = '';
      todoText.style.textDecoration = 'none';
    }
  };


  ul.addEventListener('click', (event) => {
  
    if (event.target.classList.contains('bottom_block-first__btn')) {
      deleteToDo(event);
    }

    else if (event.target.classList.contains('bottom__block-check')) {
      clickCheck(event.target);
    }
  });

