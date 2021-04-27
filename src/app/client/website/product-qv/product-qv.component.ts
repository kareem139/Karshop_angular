import { Component, OnInit } from '@angular/core';
import { CartitemService } from 'src/app/admin/vendor/shared/cartitem.service';
import { ProductService } from 'src/app/admin/vendor/shared/product.service';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';
import { UrlService } from 'src/app/shared/url.service';

@Component({
  selector: 'app-product-qv',
  templateUrl: './product-qv.component.html',
  styleUrls: ['./product-qv.component.css']
})
export class ProductQvComponent implements OnInit {

  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]))
  userId = this.payload.userId;

  constructor(public shopservice: ShopService,public productservice: ProductService,public url: UrlService,public cartservice: CartitemService) { }

  ngOnInit(): void {
    this.productservice._get_product_by_id(this.productservice.product.productId)
  }

  submit(data:any,pId:any)
  {
    this.cartservice.cart.userId = this.userId;
    this.cartservice.cart.productId=pId
    this.cartservice.cart.shopId=this.shopservice.shop.shopId
    this.cartservice._add_to_cart(data);
    this.cartservice._get_all_items(this.userId)
  }

}
