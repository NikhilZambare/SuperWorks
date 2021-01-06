import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData:any[]=[];
  cartCount:number=0;
  proQty:number=1;
  totalAmmount:any=0;
  qtytotal=0;
  constructor(private http:ProductService) { }

  ngOnInit(): void {
    this.cartData=this.http.getcartData();
    this.cartCount=this.cartData.length;
    this.calTotalAmount();
  }
  calTotalAmount(){
    let total=0;
    let qty_total=0;
    this.http.getcartData().map(item => {
      total += (item.rate * item.qty);
      qty_total += Number(item.qty);
    });
    this.totalAmmount=total;
    this.qtytotal=qty_total;
  }
  updateQty(qty,id){
    this.http.UpdateCartQty(Number(qty),id);
    this.calTotalAmount();
  }
}
