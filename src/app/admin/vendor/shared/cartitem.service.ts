import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { Cartitem } from './cartitem.model';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {

  cart = new Cartitem;
  cartitems: any;


  constructor(public url: UrlService, private http: HttpClient) { }

  _add_to_cart(data:any)
  {

    return this.http.post(this.url.mainUrl + 'cartitem', data).subscribe(res => {
      this.cartitems = res
      this._get_all_items(data.userId);
    })
  }

  _get_all_items(data: any)
  {
    return this.http.get(this.url.mainUrl + 'cartitem/' + data).subscribe(res => {
      this.cartitems = res;


    })
  }

}
