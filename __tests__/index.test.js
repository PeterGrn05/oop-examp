import { DiscountService } from '../DiscountService.js';
import { beforeEach, describe, expect, test } from '@jest/globals';

describe("Функционирование сервиса скидки", () => {
    let service;
    let percentageDiscount;

    beforeEach(() => {
        service = new DiscountService();
        percentageDiscount = {
            apply: (price) => price * 0.8, // 20% скидка
        };
    });

    test('Ошибка при неустановленной стратегии', () => {
        expect(() => service.getFinalPrice(1000)).toThrow('Стратегия скидок не установлена');
    }) 

    test('Корректное принятие стратегии', () => {
        service.setDiscountStrategy(percentageDiscount);
        expect(service.getFinalPrice(1000)).toBe(800);
    })

    test('Сохраняет историю скидок', () => {
        service.setDiscountStrategy(percentageDiscount);
        service.getFinalPrice(1000);
        const history = service.getDiscountHistory();
        expect(history).toEqual([
            { originalPrice: 1000, discountedPrice: 800 }
        ]);
    })

    test('Удаляет историю скидок', () => {
        service.setDiscountStrategy(percentageDiscount);
        service.getFinalPrice(1000);
        service.clearHistory();
        expect(service.getDiscountHistory()).toEqual([])
    })

    
})