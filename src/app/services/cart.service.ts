import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

const CART_KEY = 'foodApp-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      this.cart = Object.assign(new Cart(), JSON.parse(storedCart));
      this.cart.items = this.cart.items.map(item => Object.assign(new CartItem(new Foods()), item));
    }
  }

  private saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(this.cart));
  }

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.saveCart();
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.saveCart();
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id == foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.saveCart();
  }

  getCart(): Cart {
    return this.cart;
  }
  getCartItemCount(): number {
    return this.cart.items.length;
  }
}
