import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { CartitemService } from './cartitem.service';
import { Order } from './order.model';
import { ProductService } from './product.service';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order = new Order;
  orders: any;
  constructor(public shopservice: ShopService, public productservice: ProductService, public cartservice: CartitemService,
    private url: UrlService, private http: HttpClient) { }

  _add_order(data:any)
  {
    return this.http.post(this.url.mainUrl+'order',data)
  }

  _get_order()
  {
    let payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    let userId = payload.userId;
    this.http.get(this.url.mainUrl + 'order/' + userId).subscribe(res => {
      this.orders = res
      console.log(res)
    })
  }
}
