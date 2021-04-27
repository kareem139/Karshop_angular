import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/shared/url.service';
import { BrandService } from '../shared/brand.service';
import { CategoryService } from '../shared/category.service';
import { ProductService } from '../shared/product.service';
import { ShopService } from '../shared/shop.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
  userId = this.payload.userId;

  filter = new FormControl('');


  constructor(public shopservice: ShopService, public url: UrlService, private catservice: CategoryService,
    private brandservice: BrandService, private productservice: ProductService,
  private model:NgbModal) {


  }


  ngOnInit(): void {
    this.shopservice._get_my_shop(this.userId)
  }


  addcat(id: any)
  {
    this.catservice.category.shopId = id;
    this.brandservice.brand.shopId = id;
    this.productservice.product.shopId = id;
    this.shopservice.shop.shopId = id;


  }

  refresh()
  {
    this.shopservice._get_my_shop(this.userId)
  }
  open(addshop: any)
  {
      this.model.open(addshop,{size:'lg',centered:true})
  }
}
