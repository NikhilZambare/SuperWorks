import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:any[]=[
    {
      id:1,
      product_name:"Sony Xperia",
      product_img:"../../assets/img/product_img/01.jpg",
      rate:25999,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:2,
      product_name:"Smart Watch (Red)",
      product_img:"../../assets/img/product_img/02.jpg",
      rate:6999,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:3,
      product_name:"Whirlpool 190 L 3 Star ",
      product_img:"../../assets/img/product_img/03.jpg",
      rate:12790,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:4,
      product_name:"Usha Steam Pro",
      product_img:"../../assets/img/product_img/04.jpg",
      rate:975,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:5,
      product_name:"Fit Band Pro",
      product_img:"../../assets/img/product_img/05.jpg",
      rate:2499,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:6,
      product_name:"Haier 195 L 4 Star",
      product_img:"../../assets/img/product_img/06.jpg",
      rate:18790,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:7,
      product_name:"Colorfit Pro 2",
      product_img:"../../assets/img/product_img/07.jpg",
      rate:2999,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    },
    {
      id:8,
      product_name:"Apple iPhone 11 Pro Max",
      product_img:"../../assets/img/product_img/08.jpg",
      rate:121900,
      dsce:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      qty:1,
      isAdded:true
    }
  ]

  cartData:any[]=[];
  constructor() { }

  getProductData(){
    return this.productData;
  }
  addCartData(data,i){
    this.cartData.push(data);
    return this.productData[i].isAdded=false;
  }
  getcartData(){
    return this.cartData;
  }
  UpdateCartQty(qty,id){
   return this.cartData[id].qty=qty;
  }
}
