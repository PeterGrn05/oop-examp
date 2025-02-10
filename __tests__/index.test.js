import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import DiscountService from "../services/DiscountService.js";
import { describe, test } from '@jest/globals';

describe("Функционирование корзины", () => {
    test("Добавление товаров", () => {
        const cart = new Cart();
        const apple = new Product("Яблоко", 2);

        cart.addItem(apple);

        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toBe(apple);
    });

    test("Общая корзина", () => {
        const cart = new Cart();
        cart.addItem(new Product("Яблоко", 2));
        cart.addItem(new Product("Банан", 3));

        expect(cart.getTotalPrice()).toBe(5);
    });

    test("Скидка 10%", () => {
        const cart = new Cart();
        cart.addItem(new Product("Яблоко", 10));

        const discountedTotal = DiscountService.applyDiscount(cart, 10);

        expect(discountedTotal).toBe(9);
    });
})