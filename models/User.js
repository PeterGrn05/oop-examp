import Cart from "./Cart.js";

class User {
  constructor(name) {
    this.name = name;
    this.cart = new Cart();
  }

  addToCart(product) {
    this.cart.addItem(product);
  }

  checkout() {
    console.log(`${this.name} оплатил(а) $${this.cart.getTotalPrice()}`);
  }
}

export default User;
