import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  item: Products | any
  cartItems: Products[] = [];
  isAddingToCart = false;

  ngOnInit(): void {
    const productId = this.router.snapshot.params['id'];
    this.fetchItems(productId);
  }

  constructor(
    private router: ActivatedRoute,
    private snackBar: MatSnackBar,
    private Service: ProductService,
    private RouterLink: Router
  ) { }

  fetchItems(productId: string) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => {
        this.item = json;
      }).catch(error => {
        console.error('Error==> ', error);
      });
  }

  addToCart(item: Products) {
    if (item.quantity === undefined || item.quantity === 0) {
      this.snackBar.open('Please enter a valid quantity', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-error',
        verticalPosition : 'top',
        horizontalPosition : 'center'
      });
      return;
    }
    this.isAddingToCart = true;
    this.Service.addToCart(item);
    this.showSnackBar('Item added to cart');
    setTimeout(() => {
      this.RouterLink.navigate(['/products'])
      this.isAddingToCart = false;
    }, 2000)
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }

  validateInput(event: any) {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (isNaN(numericValue) || numericValue <= 1) {
      this.item.quantity = 1;
    } else {
      this.item.quantity = numericValue;
    }
  }


}
