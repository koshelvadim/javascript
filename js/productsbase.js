"use strict";
/**
 * Создаём конструктор для карточек товара
 * @param {number} id уникальный идентификатор товара
 * @param {string} name наименование товара
 * @param {string} text описание товара
 * @param {number} price цена товара
 * @param {string} image название файла картинки товара
 */
class ProductsConstructor {
    constructor(id, name, text, price, image){
        this.id = id;
        this.name = name;
        this.text = text;
        this.price = price;
        this.image = image;
    }
}
// Массив продуктов
const products = [
    new ProductsConstructor(
        0,
        'Product 0',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        55.00,
        'items_0.png',
    ),
    new ProductsConstructor(
        1,
        'Product 1',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        50.00,
        'items_1.png',
    ),
    new ProductsConstructor(
        2,
        'Product 2',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        48.00,
        'items_2.png',
    ),
    new ProductsConstructor(
        3,
        'Product 3',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        32.00,
        'items_3.png',
    ),
    new ProductsConstructor(
        4,
        'Product 4',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        62.00,
        'items_4.png',
    ),
    new ProductsConstructor(
        5,
        'Product 5',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        48.00,
        'items_5.png',
    ),
    new ProductsConstructor(
        6,
        'Product 6',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        72.00,
        'items_6.png',
    ),
    new ProductsConstructor(
        7,
        'Product 7',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        53.00,
        'items_7.png',
    ),
    new ProductsConstructor(
        8,
        'Product 8',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        57.00,
        'items_8.png',
    ),
    new ProductsConstructor(
        9,
        'Product 9',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        59.00,
        'items_9.png',
    ),
    new ProductsConstructor(
        10,
        'Product 10',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        62.00,
        'items_10.png',
    ),
    new ProductsConstructor(
        11,
        'Product 11',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        64.00,
        'items_11.png',
    ),
];
