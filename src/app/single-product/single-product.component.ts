import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  item: Products | any
  cartItems: Products[] = [];

  ngOnInit(): void {
    const productId = this.router.snapshot.params['id'];
    this.fetchItems(productId);
  }

  constructor(private router: ActivatedRoute, private snackBar: MatSnackBar) { }

  fetchItems(productId: string) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => {
        this.item = json;
      }).catch(error => {
        console.error('Error==> ', error);
      });
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.showSnackBar('Item added to cart');
  }
  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
}
