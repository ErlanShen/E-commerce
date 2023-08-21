import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  showFiller = false;

  cartItems: Products[] = [];
  totalItemsInCart: number = 0
  totalCartPrice: number = 0


  private allProducts = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.allProducts);
  }

  addToCart(Product: Products,) {

    const existingProduct = this.cartItems.find(item => item.id === Product.id)
    if (!existingProduct) {
      this.cartItems.push(Product);
      this.totalItemsInCart++;
      this.calculateTotalCartPrice();
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  calculateTotalCartPrice() {
    this.totalCartPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTotalCartPrice(){
    return this.totalCartPrice
  }

  removeFromCart(product: Products) {
    const removeProduct = this.cartItems.findIndex(item => item.id === product.id)
    if (removeProduct !== -1) {
      this.cartItems.splice(removeProduct, 1);
      this.calculateTotalCartPrice()
      this.totalItemsInCart--;
    }
  }
  resetCart() {
    this.cartItems = [];
  }

  resetTotalCartPrice() {
    this.totalCartPrice = 0; // Update this based on how you manage the total price
  }

  processPayment() {
    console.log('Payment processed');
    this.totalItemsInCart = 0;
    this.totalCartPrice = 0;
  }

}