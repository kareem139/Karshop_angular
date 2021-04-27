import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product = new Product;
  products: any;
  constructor(private http: HttpClient, private url: UrlService) { }


  _add_product(data: any)
  {
    return this.http.post(this.url.mainUrl + 'product', data);
  }

  _get_all_product()
  {
    return this.http.get(this.url.mainUrl + 'product').subscribe(res => {
      this.products = res;
    })
  }

  _get_my_product(userId: any)
  {
    return this.http.get(this.url.mainUrl + 'product/getmyproduct/' + userId).subscribe(res => {
      this.products = res;
    })
  }

  _delete(data: any)
  {
    console.log(data)

    return this.http.delete(this.url.mainUrl + 'product/'+data);
  }

  _get_product_by_id(id:any)
  {
    return this.http.get(this.url.mainUrl + 'product/' + id).subscribe(res => {
      this.products = res
    })
  }
}
