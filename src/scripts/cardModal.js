    const basketButton = document.querySelector('.header__contant-btn');
    const basketBtnImg = document.querySelector('.header__contant-basket')
    const modal = document.querySelector('.card__modal');
    const closeButton = document.querySelector('.close__card-modal');
    const addButtons = document.querySelectorAll('.content__product-add');
    const clearButton = document.querySelector('.clear__card');
    const cartContent = document.querySelector('.card__modal-content');
    const totalAmount = document.querySelector('.total__amount');

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    basketButton.addEventListener('click', function() {
        modal.classList.add('card__modal-view')
        updateCart();
        
    });

    basketBtnImg.addEventListener('click', function() {
        modal.classList.add('card__modal-view')
        updateCart();
    })


    closeButton.addEventListener('click', function() {
        modal.classList.remove('card__modal-view')
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('card__modal-view');
        }
    });

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productTitle = this.closest('.content').querySelector('.content__description__product').innerText
            const productPrice = this.closest('.content').querySelector('.content__description-price_new').innerText
            cartItems.push({ title: productTitle, price: parseInt(productPrice) });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        });
    });

    clearButton.addEventListener('click', function() {
        cartItems = [];
        localStorage.removeItem('cartItems');
        updateCart();
    });

    function updateCart() {
        cartContent.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.innerText = `${item.title} - ${item.price} рублей`;
            cartContent.appendChild(itemElement);

            total += item.price;
        });

        totalAmount.innerText = total;
    }
