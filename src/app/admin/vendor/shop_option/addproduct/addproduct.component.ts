import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { BrandService } from '../../shared/brand.service';
import { CategoryService } from '../../shared/category.service';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  selectfiles: any;
  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
  userId = this.payload.userId;

  constructor(public productservice: ProductService, public catservice: CategoryService, public brandservice: BrandService,
  private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.brandservice._get_all_brand_with_shoId(this.productservice.product.shopId);
    this.catservice._get_all_category_with_shoId(this.productservice.product.shopId);
  }

  handel(event: any)
  {
    this.selectfiles=<File>event.target.files
  }

  submit(data: any)
  {
    let fd = new FormData();
    for (let index = 0; index < this.selectfiles.length; index++) {
      fd.append("image",this.selectfiles[index])

    }
    fd.append("productName", data.productName);
    fd.append("categoryId", data.categoryId);
    fd.append("description", data.description);
    fd.append("price", data.price);
    fd.append("stock", data.stock);
    fd.append("shopId", data.shopId);
    fd.append("brandId", data.brandId);
    fd.append("isActive", data.isActive);
    fd.append("userId", this.userId);
      console.log(data.brandId)

    this.productservice._add_product(fd).subscribe(res => {
      this.toaster.success('add success');
      });
  }

}
