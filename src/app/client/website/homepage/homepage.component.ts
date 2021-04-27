import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
import { ProductService } from 'src/app/admin/vendor/shared/product.service';
import { ShopService } from 'src/app/admin/vendor/shared/shop.service';
import { UrlService } from 'src/app/shared/url.service';
SwiperCore.use([Navigation,
  Pagination,
  Scrollbar,
  A11y,]);
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {


  constructor(public shopservice: ShopService, public url: UrlService, public productservice: ProductService, ) {

  }


  ngOnInit(): void {
    this.shopservice._get_all_shop();
    this.productservice._get_all_product();
  }
  showshop(shopId: any)
  {
    this.shopservice.shop.shopId = shopId;
    localStorage.setItem('id', this.shopservice.shop.shopId.toString());
    this.shopservice.shopheadimg = this.url.mainUrl + (this.shopservice.shops[2].imageUrl3.replace('\\', '//'));
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
