import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[];
  cartCount:number=0;
  constructor( private http:ProductService) { }

  ngOnInit(): void {
    this.products=this.http.getProductData();
    this.cartCount=this.http.getcartData().length;
  }
  addToCart(product,i){
    this.http.addCartData(product,i);
    this.cartCount=this.http.getcartData().length;
  }
}
