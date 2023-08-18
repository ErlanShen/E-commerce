import { Component } from '@angular/core';
import { Products } from '../model/product';
import { ProductService } from '../service/product.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent {
  items: Products[] = [];
  currentIndex = 0;
  timerSubscription: Subscription | any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.startCarousel();
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  fetchProducts() {
    this.productService.getProducts()
      .subscribe(data => {
        this.items = data.slice(0, 5);
      });
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, 10000); // Cambiar cada 5 segundos
  }

  
  
}
