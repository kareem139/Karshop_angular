import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/client/auth/shared/user.service';
import { UrlService } from 'src/app/shared/url.service';
import { Brand } from './brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brand = new Brand;
  brands: any;
  constructor(private http: HttpClient, private url:UrlService) { }


  _add_brand(data: any)
  {
    return this.http.post(this.url.mainUrl + 'brand', data);
  }

  _get_all_brand()
  {
    return this.http.get(this.url.mainUrl + 'brand').subscribe(res => {
      this.brands = res as [];
    })
  }

  _get_all_brand_with_shoId(id: any) {
    return this.http.get(this.url.mainUrl + 'brand/' + id).subscribe(res => {
      this.brands = res;
    })
  }
}
