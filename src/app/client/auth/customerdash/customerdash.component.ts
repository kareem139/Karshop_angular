import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/admin/vendor/shared/order.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-customerdash',
  templateUrl: './customerdash.component.html',
  styleUrls: ['./customerdash.component.css']
})
export class CustomerdashComponent implements OnInit {


  constructor(public userservice:UserService,public orderservice:OrderService) { }

  ngOnInit(): void {
    this.userservice.getuserdata();
    this.orderservice._get_order();
  }

}
