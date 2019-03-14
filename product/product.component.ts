import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import{ ProductListComponent} from './product-list/product-list.component';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  // @ViewChild(ProductListComponent)productListComponent: ProductListComponent;
  @ViewChildren(ProductListComponent)
  productChildrenComponent: QueryList<ProductListComponent>;
  products: Product[] = [];
  constructor() { }

    sendProduct(){
      this.products = [
        {id:1, name:'Cycle', price: 1000, mfd:new Date('12-06-1978')},
        {id:2, name:'Bi Cycle', price: 10000, mfd:new Date('12-06-1979')},
        {id:3, name:'Motor Cycle', price: 100, mfd:new Date('12-06-1999')},
        {id:4, name:'Plane', price: 100000, mfd:new Date('12-06-1998')},
        {id:5, name:'CAr', price: 10000000, mfd:new Date('12-06-1968')},
      ];
      //this.productListComponent.productlist = this.products;
      console.log(this.productChildrenComponent);
      this.productChildrenComponent.forEach(
        (productComponent) =>productComponent.productlist = this.products
      );
    }
}
