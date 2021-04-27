import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './client/auth/login/login.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { HomepageComponent } from './client/website/homepage/homepage.component';
import { MainheaderComponent } from './client/website/mainheader/mainheader.component';
import { ConfirmComponent } from './client/auth/confirm/confirm.component';
import { NgbCarousel, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorDashboardComponent } from './admin/vendor-dashboard/vendor-dashboard.component';
import { AddshopComponent } from './admin/vendor/addshop/addshop.component';
import { ShoplistComponent } from './admin/vendor/shoplist/shoplist.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AuthInterceptor } from './middleware/auth.interceptor';
import * as $ from "jquery";
import { AddcategoryComponent } from './admin/vendor/shop_option/addcategory/addcategory.component';
import { AddbrandComponent } from './admin/vendor/shop_option/addbrand/addbrand.component';
import { AddproductComponent } from './admin/vendor/shop_option/addproduct/addproduct.component';
import { ShopComponent } from './admin/vendor/shop_option/shop/shop.component';
import { ShopDetailsComponent } from './admin/vendor/shop_option/shop-details/shop-details.component';
import { ShoppageComponent } from './client/website/shoppage/shoppage.component';
import { FirsthomeComponent } from './client/website/firsthome/firsthome.component';
import { ProductQvComponent } from './client/website/product-qv/product-qv.component';
import { CartComponent } from './client/website/cart/cart.component';
import { PaymentComponent } from './client/website/payment/payment.component';
import { SwiperModule } from 'swiper/angular';
import { ShopshomeComponent } from './client/website/shopshome/shopshome.component';
import { CustomerdashComponent } from './client/auth/customerdash/customerdash.component';
import { FooterComponent } from './client/website/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    MainheaderComponent,
    ConfirmComponent,
    VendorDashboardComponent,
    AddshopComponent,
    ShoplistComponent,
    AddcategoryComponent,
    AddbrandComponent,
    AddproductComponent,
    ShopComponent,
    ShopDetailsComponent,
    ShoppageComponent,
    FirsthomeComponent,
    ProductQvComponent,
    CartComponent,
    PaymentComponent,
    ShopshomeComponent,
    CustomerdashComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    TooltipModule.forRoot(),
    SwiperModule,
    NgbCarouselModule,


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
