import Product from "./models/Product.js";
import User from "./models/User.js";
import DiscountService from "./services/DiscountService.js";

const user = new User("Алиса");

const apple = new Product("Яблоко", 2);
const banana = new Product("Банан", 3);

user.addToCart(apple);
user.addToCart(banana);

console.log(`Итоговая сумма без скидки: $${user.cart.getTotalPrice()}`);

const totalWithDiscount = DiscountService.applyDiscount(user.cart, 10);
console.log(`Итоговая сумма со скидкой 10%: $${totalWithDiscount}`);

user.checkout();
