import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  items: Products[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.items = json;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
