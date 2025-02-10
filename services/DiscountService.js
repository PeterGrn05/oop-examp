class DiscountService {
  static applyDiscount(cart, percentage) {
    const discount = cart.getTotalPrice() * (percentage / 100);
    return cart.getTotalPrice() - discount;
  }
}

export default DiscountService;
