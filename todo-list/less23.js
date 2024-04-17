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