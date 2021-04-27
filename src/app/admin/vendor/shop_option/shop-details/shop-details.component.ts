import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { UrlService } from 'src/app/shared/url.service';
import { BrandService } from '../../shared/brand.service';
import { CategoryService } from '../../shared/category.service';
import { ProductService } from '../../shared/product.service';
import { ShopService } from '../../shared/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnChanges, OnInit {

  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
  userId = this.payload.userId;

  alldata: any;


  constructor(public shopservice: ShopService, public url: UrlService,
    private catservice: CategoryService, private brandservice: BrandService,
    private productservice: ProductService, private modalService: NgbModal,
  private toaster: ToastrService) { }

  ngOnChanges()
  {
    this.shopservice._get_shop_by_shopId(this.shopservice.shop.shopId);
  }
  ngOnInit(): void {
    this.shopservice._get_shop_by_shopId(this.shopservice.shop.shopId);


  }


  addcat(id: any)
  {
    this.catservice.category.shopId = id;
    this.brandservice.brand.shopId = id;
    this.productservice.product.shopId = id;
    this.shopservice.shop.shopId = id;


  }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    }, (reason) => {

    });
  }

  search(event:any)
  {
    document.querySelector('#searchtxt')?.addEventListener('keyup', (e) => {

      // get search value
      const search = event.target.value;
      console.log(search)
      console.log(event)

   // get customer name
    const productname = document.getElementsByClassName('card-title');


    for (let index = 0; index < productname.length; index++) {
        const element = productname[index];
        console.log(element.innerHTML)

        if (search != '') {

            if (element.innerHTML.toLocaleLowerCase().indexOf(search!.toLocaleLowerCase())<0 ) {
                element.parentElement!.parentElement!.classList.add('hidden');
            } else {

                element.parentElement!.parentElement!.classList.remove('hidden');
            }


        } else {
            element.parentElement!.parentElement!.classList.remove('hidden');
        }
    }

});
  }



  Delete(id: any)
  {
    this.productservice._delete(this.userId+'/'+this.shopservice.shop.shopId+'/'+id).subscribe(res => {
      this.toaster.success('delete success');
      this.shopservice._get_shop_by_shopId(this.shopservice.shop.shopId);
    })
  }

  refresh()
  {
    this.shopservice._get_shop_by_shopId(this.shopservice.shop.shopId);
  }
}
