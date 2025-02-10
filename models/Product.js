class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getInfo() {
    return `${this.name}: $${this.price}`;
  }
}

export default Product;
