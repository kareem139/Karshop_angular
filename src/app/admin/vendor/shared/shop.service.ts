import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UrlService } from 'src/app/shared/url.service';
import { Shop } from './shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shop = new Shop
  shops: any;
  shopheadimg: any;

  constructor(private http: HttpClient, private url: UrlService) { }



  myshopform = new FormGroup({
    shopId: new FormControl(),
    shopName: new FormControl(),
    ownerId: new FormControl(),
    ownerName: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    phoneNum: new FormControl(),
    image: new FormControl(),

  });



  _add_shop(data: any)
  {
    return this.http.post(this.url.mainUrl + 'shop', data, { reportProgress: true, observe: 'events' });
  }

  _get_all_shop()
  {
    return this.http.get(this.url.mainUrl + 'shop').subscribe(res => {
      this.shops = res as [];

    })
  }

  _get_my_shop(userId: any)
  {
    return this.http.get(this.url.mainUrl + 'shop/getmyshop/'+ userId).subscribe(res => {
      this.shops = res ;
    })
  }

  _get_shop_by_shopId(data: any)
  {

    return this.http.get(this.url.mainUrl + 'shop/'+data).subscribe(res => {
      this.shops = res;
      console.log(res)
    })
  }
}
