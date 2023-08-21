import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  isCartOpen: boolean = false;

  constructor(
    private Service: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void { }

  get cartItems() {
    return this.Service.getCartItems();
  }

  get totalCartPrice() {
    return this.Service.getTotalCartPrice();
  }

  removeItem(item: Products) {
    this.Service.removeFromCart(item)
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;


  close(reason: string) {
    this.sidenav.close();
    if (this.cartItems.length > 0) {
      this.isCartOpen = true
    } else {
      this.snackBar.open('Your cart is empty.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    }
  }

  processPayment() {
    console.log('Payment processed');
    this.Service.resetCart();
    this.Service.resetTotalCartPrice();
    // Display successful purchase message
    this.snackBar.open('Purchase was successful! Thank you for shopping!', 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 2000)
  }

}
