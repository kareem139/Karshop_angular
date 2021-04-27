import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/admin/vendor/shared/product.service';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';

@Component({
  selector: 'app-firsthome',
  templateUrl: './firsthome.component.html',
  styleUrls: ['./firsthome.component.css']
})
export class FirsthomeComponent implements OnInit {

  constructor(public shopservice: ShopService, public productservice: ProductService) { }

  ngOnInit(): void {
    this.shopservice._get_all_shop();
    this.productservice._get_all_product();
  }

}
