import { Component } from '@angular/core';
import { Products } from './model/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'E-commerce';
  items: any[] = [];
}

/* fetch('https://fakestoreapi.com/products?limit=5')
  .then((res) => res.json())
  .then((json) => console.log(json));
 */
