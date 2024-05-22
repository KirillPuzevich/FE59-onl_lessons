const searchInput = document.querySelector('.header__contant-input');
const productTitles = document.querySelectorAll('.content__description__product');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    
    productTitles.forEach(event => {
        const productTitleText = event.textContent.toLowerCase();
        
        if (productTitleText.includes(searchText)) {
            event.closest('.content').classList.remove('content_show')
        } else {
            event.closest('.content').classList.add('content_show')
        }
    });
});