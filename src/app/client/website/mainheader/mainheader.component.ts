import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartitemService } from 'src/app/admin/vendor/shared/cartitem.service';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';
import { UrlService } from 'src/app/shared/url.service';
import { UserService } from '../../auth/shared/user.service';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {

  isVendor: any;
  isCustomer: any;
  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
  role = this.payload.role;
  userId = this.payload.userId;

  constructor(public userservice: UserService, public url: UrlService, config: NgbCarouselConfig,
    public shopservice: ShopService, public cartservice: CartitemService,private modalService:NgbModal) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
        if (localStorage.getItem('token')!=null) {
          this.userservice.loginstatus = true;
          this.userservice.getuserdata();
        } else {
          this.userservice.loginstatus = false;
        }

       switch (this.role) {
         case "Vendor":
           this.isVendor = true;
           this.isCustomer = false;

           break;

         case "Customer":
           this.isCustomer = true;
           this.isVendor = false;
           break;
         default:
          this.isCustomer = false;
          this.isVendor = false;

           break;
       }

    this.cartservice._get_all_items(this.userId);


  }


  open(cart: any)
  {
    this.modalService.open(cart,{size:'lg',centered:true})
  }


}
