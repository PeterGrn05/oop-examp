import Product from "./Product.js";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    if (product instanceof Product) {
      this.items.push(product);
    } else {
      throw new Error("Можно добавлять только продукты!");
    }
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
  }
}

export default Cart;
