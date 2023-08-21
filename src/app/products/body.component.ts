import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {

  items: Products[] = [];
  totalItems: number = 0
  /* paginator */
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions = [5, 10, 15, 20];
  totalProducts = 20;
  hidePageSize = false;
  showPageSizeOptions = true;

  onPageChange(event: PageEvent): void {
    
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }


  ngOnInit(): void {
    this.fetchItems();
    
  }

  fetchItems() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.totalItems = json.length
        this.items = json;
        /* const UniqueIds = new Set(this.item.map( item => item.id));
        this.totalItems = UniqueIds.size; */
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
