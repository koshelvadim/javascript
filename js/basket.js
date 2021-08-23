"use strict";
 // ссылка счетчика количества товара в корзине
 const linkBasketCounter = document.querySelector('.basket_count'); 
 const linkBasketButton = document.querySelector('.fa-shopping-cart');
 const linkBasketTotalCoast = document.querySelector('.totalCoast');

 /**
  * слушает событие клика на иконке корзины и переключает класс "hidden" в HTML
  */
linkBasketButton.addEventListener('click', function() {
    document.querySelector('div.basket').classList.toggle('hidden');
});
 /**
  * создаем объект для хранения кол-ва товаров в корзине
  * basket {id товара, количество}
  */
 let basket = {};
 /**
 * функция увеличивает счетчик товаров в корзине
 */
function addProductToObject(productId) {
    if(!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}
/**
 * функция отрисовки продукта в корзине
 * @param {*} productId 
 */
function renderProductInBaket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {  //если есть продукт в корзине, то 
        increaseProductCount(productId);  // увеличиваем кол-во
        reclculateSumForProduct(productId);  // меняем стоимость товаров
    } else {
        renderNewProductInBasket(productId);
    }
}
/**
 * функция добавляет новый товар в корзину по шаблону
 * @param {*} productId 
 */
function renderNewProductInBasket(productId) {
    let productRow = `
    <div class="newrow">
        <div class="col">${products[productId].name}</div>
        <div class="col"><span class="productCount" data-productId="${productId}">1</span> шт.</div>
        <div class="col">$${products[productId].price}</div>
        <div class="col">$<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span></div>
    </div>
    `;
    document.querySelector('.row_total').insertAdjacentHTML('beforebegin', productRow);
}

/**
 * функция увеличивает количество товара на единицу, если он был добавлен к корзину
 * @param {*} productId 
 */
function increaseProductCount(productId) {
    const linkProductCount = document.querySelector(`.productCount[data-productId="${productId}"]`);
    linkProductCount.textContent++;
}
/**
 * функция пересчитывает общую стоимость строчки товара в зависимости от его кол-ва
 * @param {*} productId 
 */
function reclculateSumForProduct(productId) {
    const linkProductTotalRow = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceRow = (basket[productId] * products[productId].price).toFixed(2);
    linkProductTotalRow.textContent = totalPriceRow;
}
/**
 * функция расчитывает окончательную стоимость товаров в корзине
 */
function calculateTotalCoastBasket() {
    let totalCoast = 0;
    for(let productId in basket){
        totalCoast += basket[productId] * products[productId].price;
    }
    linkBasketTotalCoast.textContent = totalCoast.toFixed(2);
}
/**
 * функция увеличивает счетчик общего кол-ва товаров на иконке корзины
 */
function increaseProductsCount() {
    linkBasketCounter.textContent++;
}
/**
 * функция вызывается при добавлении товара в корзину
 * @param {*} productId 
 */
 function addProductBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
    renderProductInBaket(productId);
    calculateTotalCoastBasket();
}