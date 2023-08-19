import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  items: Products[] = [];

  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25];
  totalProducts = this.items.length;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  constructor(private http: HttpClient) {}

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
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
