import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';
import { UrlService } from 'src/app/shared/url.service';

@Component({
  selector: 'app-shopshome',
  templateUrl: './shopshome.component.html',
  styleUrls: ['./shopshome.component.css']
})
export class ShopshomeComponent implements OnInit {

  constructor(public shopservice: ShopService,public url:UrlService) { }

  ngOnInit(): void {
    this.shopservice._get_all_shop();
  }

}
