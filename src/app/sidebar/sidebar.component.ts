import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Products } from '../model/product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{



  constructor(
    private Service : ProductService,
  ) { }

  ngOnInit(): void { }

  showFiller = false; 

  get cartItems() {
    return this.Service.getCartItems();
  }

  get totalCartPrice() {
    return this.Service.getTotalCartPrice();
  }

  removeItem(item : Products){
    this.Service.removeFromCart(item)
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  processPayment() {
    console.log('Payment processed');
    
  }
  
}
