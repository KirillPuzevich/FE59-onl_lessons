
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal__img');
const closeBtn = document.querySelector('.close');
const viewButtons = document.querySelectorAll('.content__product-view');
const productImages = document.querySelectorAll('.content__product-image');

viewButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        modal.classList.add('modal__show');
        modalImg.src = productImages[index].src;
    });
});


closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal__show');
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('modal__show');
    }
});
