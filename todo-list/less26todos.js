import {
    deleteAll,
    deleteLast,
    handleClickCreate,
    handleClickUl,
    searchField, 
    showAll, 
    showCompleted
} from "./less26.js";

const ul = document.querySelector('.bottom_block');
const handleClickInput = document.querySelector('.bottom__block-items-search');
const showAllButton = document.querySelector('.show-all');
const showCompletedButton = document.querySelector('.show-completed');
const deleteLastButton = document.querySelector('.top__block-delete_last');
const deleteAllButton = document.querySelector('.top__block-delete_all');
const addButton = document.querySelector('.top__block-items_add');
const itemsInput = document.querySelector('.top-block_items-input');

handleClickInput.addEventListener('input', (event) =>
searchField(event, ul)
);

showAllButton.addEventListener('click', () =>
showAll(ul)
);

showCompletedButton.addEventListener('click', () =>
showCompleted(ul)
);

ul.addEventListener('click', (event) =>
handleClickUl(event)
);

deleteLastButton.addEventListener('click', () =>
deleteLast())

deleteAllButton.addEventListener('click', () =>
deleteAll())

addButton.addEventListener('click', () =>
handleClickCreate(itemsInput))




