import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { VendorDashboardComponent } from './admin/vendor-dashboard/vendor-dashboard.component';
import { AddshopComponent } from './admin/vendor/addshop/addshop.component';
import { ShoplistComponent } from './admin/vendor/shoplist/shoplist.component';
import { AddbrandComponent } from './admin/vendor/shop_option/addbrand/addbrand.component';
import { AddcategoryComponent } from './admin/vendor/shop_option/addcategory/addcategory.component';
import { AddproductComponent } from './admin/vendor/shop_option/addproduct/addproduct.component';
import { ShopDetailsComponent } from './admin/vendor/shop_option/shop-details/shop-details.component';
import { ShopComponent } from './admin/vendor/shop_option/shop/shop.component';
import { CustomerdashComponent } from './client/auth/customerdash/customerdash.component';
import { LoginComponent } from './client/auth/login/login.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { CartComponent } from './client/website/cart/cart.component';
import { FirsthomeComponent } from './client/website/firsthome/firsthome.component';
import { HomepageComponent } from './client/website/homepage/homepage.component';
import { ShoppageComponent } from './client/website/shoppage/shoppage.component';
import { ShopshomeComponent } from './client/website/shopshome/shopshome.component';
import { AuthGuard } from './middleware/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/firsthome/home", pathMatch: "full"},
  {
    path: "firsthome", component: FirsthomeComponent, children: [
      { path: "home", component: HomepageComponent },
      { path: "shoppage", component: ShoppageComponent,canActivate:[AuthGuard],data:{permittedRoles:['Customer']} },
      { path: "cart", component: CartComponent ,canActivate:[AuthGuard],data:{permittedRoles:['Customer']}},
      { path: "shops", component: ShopshomeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Customer'] } },
      { path: "customerdash", component: CustomerdashComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Customer'] } }
  ]}
  ,
  {
    path: "user", children: [
      { path: "signup", component: SignupComponent },
      {path: "signin", component:LoginComponent}
    ]
  },
  {
    path: "admin", component: DashboardComponent, children: [

    ]
  },
  {
    path: "vendor", component: VendorDashboardComponent, children: [
      { path: "addshop", component: AddshopComponent },
      { path: "shoplist", component: ShoplistComponent },
      {
        path: "shop", component: ShopComponent, children: [
          { path: "addcategory", component: AddcategoryComponent },
          { path: "addbrand", component: AddbrandComponent },
          { path: "addproduct", component: AddproductComponent },
          {path:"shopdetails",component: ShopDetailsComponent}
      ]}
    ], canActivate: [AuthGuard], data: { permittedRoles: ['Vendor'] }
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
