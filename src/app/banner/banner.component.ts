import { Component } from '@angular/core';
import { Products } from '../model/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent {
  items: Products[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts()
      .subscribe(data => {
        this.items = data.slice(0, 4);
      });
  }

}
