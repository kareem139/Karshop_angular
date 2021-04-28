import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/admin/vendor/shared/product.service';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';
import { UrlService } from 'src/app/shared/url.service';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {



  constructor(public shopservice: ShopService, public url: UrlService, private modalService: NgbModal,
    public productservice: ProductService,
  private toaster:ToastrService) { }

  ngOnInit(): void {

    let id = parseInt(localStorage.getItem('id')!);
    if (id==null) {
      this.shopservice._get_shop_by_shopId(this.shopservice.shop.shopId);
    } else {
      this.shopservice._get_shop_by_shopId(id)


      this.shopservice.shopheadimg = this.url.mainUrl + (this.shopservice.shops[3].imageUrl3.replace('\\', '//'));

    }


  }

  open(content: any, id: any, shopId: any) {
    if (localStorage.getItem('token')!=null) {
      this.productservice.product.productId = id;
      this.shopservice.shop.shopId = shopId;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg',centered:true}).result.then((result) => {

      }, (reason) => {

      });
    } else {
      this.toaster.warning('please login first')
    }

  }

  getfilter(e:any)
  {

      console.log(e.target.value)
  }

}
