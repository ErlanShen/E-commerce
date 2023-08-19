import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  selectedItem : any;

  constructor( private router: ActivatedRoute ){ }

  ngOnInit(): void {
    /* const productId = this.router.snapshot.params.id;
    this.GetproductIdeFtchItems(productId) */
    console.log(this.selectedItem);
    
  }

  GetIdeFtchItems() {
    fetch('https://fakestoreapi.com/products/${productId}')
      .then(res => res.json())
      .then(json => {
        this.selectedItem = json;
        console.log(json());
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  addToCart(item: any){

  }
  
}
