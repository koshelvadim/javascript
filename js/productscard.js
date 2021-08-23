"use strict";

// ссылка на контейнер куда будем вставлять карточки товаров 
const linkCardContainer = document.querySelector('div.card_container');


/**
 * функция возвращает сгенерированную разметку для вставки на страницу
 * @param {} product 
 */
function getProductMarkup(product){
    return `
        <div class="card_box">
            <a class="card" href="product.html">
                <img class="images_card" src="images/${product.image}" alt="picture">
                <div class="card_text">
                    <h5 class="text_card_h5">${product.name}</h5>
                    <p class="text_card_p">${product.text}</p>
                    <p class="text_cash">$${product.price}</p>
                </div>
            </a>
            <div class="add_box" data-productId="${product.id}">
                <a class="add_to_cart" href="#">
                    <img class="images_add" src="images/add_to_cart.png" alt="picture">
                    <p class="text_add_to_cart_p">Add to Cart</p>
                </a>
            </div>
        </div>
    `
}
/**
 * функция вставки карточек товара на страницу
 * @param {*} products массив продуктов см.productsbase.js
 * @param {*} linkCardContainer путь вставки карточек товара
 */
function addCardProducts(products, linkCardContainer ) {
    let productsMarkup = '';
    for(let product of products){
        productsMarkup += getProductMarkup(product);
    }
    linkCardContainer.insertAdjacentHTML('afterbegin', productsMarkup)
}

/**
 * функция обработки клика всех кнопок 'add to cart'
 */
function addClickForAddToCard(){
    const listAddToCart = document.querySelectorAll('div[data-productId]');
    listAddToCart.forEach(function(addToCart) {
        addToCart.addEventListener('click', addProductHandler)
    });
}
/**
 * функция обрабатывает событие клика, запоминает ID товара и добавляет в корзину
 * @param {*} event 
 */
function addProductHandler(event){
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductBasket(productId);
}

addCardProducts(products, linkCardContainer);
addClickForAddToCard();



