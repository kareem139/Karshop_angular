import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category= new Category;
  categories:any;


  constructor(private http: HttpClient, private url: UrlService) { }

  _add_category(data: any)
  {
    return this.http.post(this.url.mainUrl + 'category', data);
  }

  _get_all_category()
  {
    return this.http.get(this.url.mainUrl + 'category').subscribe(res => {
      this.categories = res as [];
    })
  }

  _get_all_category_with_shoId(id: any)
  {
    return this.http.get(this.url.mainUrl + 'category/' + id).subscribe(res => {
      this.categories = res;
    })
  }
}
