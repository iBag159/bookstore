export default {
    cart: [],
    add({id,cover,price}) { this.cart.push({id,cover,price}) },
    remove(id) { this.cart = this.cart.filter(p => p.id !== id)}
  }