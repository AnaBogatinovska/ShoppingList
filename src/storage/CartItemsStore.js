class CartItems {
  cartItems = [];

  getCartItemsList() {
    if (localStorage.getItem("cartItemss") !== null) {
      this.cartItems = JSON.parse(localStorage.getItem("cartItemss"));
    }
    return this.cartItems;
  }

  setCartItemsList() {
    console.log("in setCart", this.cartItems);

    localStorage.setItem("cartItemss", JSON.stringify(this.cartItems));
  }

  addToCart(item) {
    let idx = this.cartItems.findIndex((i) => i.Id === item.Id);
    if (idx !== -1) {
      this.cartItems[idx].Amount += item.Amount;
    } else {
      this.cartItems.push(item);
    }
    this.setCartItemsList();
  }

  removeItemFromCart(item) {
    let idx = this.cartItems.findIndex((i) => i.Id === item.Id);
    this.cartItems.splice(idx, 1)
    this.setCartItemsList();
  }
}

export default new CartItems();
