import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartitemService } from 'src/app/admin/vendor/shared/cartitem.service';
import { OrderService } from 'src/app/admin/vendor/shared/order.service';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';
import { UserService } from '../../auth/shared/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]))
  userId = this.payload.userId;

  constructor(public cartservice: CartitemService, public shopservice: ShopService, public orderservice: OrderService,
    public userservice: UserService,private toaster:ToastrService,private modelservice: NgbModal) { }

  ngOnInit(): void {
    this.cartservice._get_all_items(this.userId);
    this.userservice.getuserdata();
  }

  order(cart: any)
  {
    console.log(cart)
    this.orderservice.order.userId = this.userId;
    this.orderservice.order.shopId = cart.shopId;
    this.orderservice.order.cartitemId = cart.cartitemId;
    this.orderservice.order.userName = this.userservice.userdata.name;
    console.log(this.orderservice.order)

    this.orderservice._add_order(this.orderservice.order).subscribe(res => {
      this.toaster.success('add success')
    }, err => {
      this.toaster.error('failed');
      console.log(err)
    })

  }


  open(stripe: any)
  {
      this.modelservice.open(stripe,{size:'md',centered:true})
  }
}
