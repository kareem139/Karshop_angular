import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/client/auth/shared/user.service';
import { ShopService } from '../shared/shop.service';
import * as $ from "jquery";
import { UrlService } from 'src/app/shared/url.service';
@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {


   payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
   id = this.payload.userId;
    urls= [];

  imgUrlforedit1 = this.service.shop.imageUrl1.replace("\\", "/");
  imgUrlforedit2 = this.service.shop.imageUrl2.replace("\\", "/");
  imgUrlforedit3 = this.service.shop.imageUrl3.replace("\\", "/");
  imgUrlforedit=[this.imgUrlforedit1,this.imgUrlforedit2,this.imgUrlforedit3]

  constructor(public service: ShopService,public userservice: UserService) { }

  ngOnInit(): void {

  }
  selctfiles!: any;


  handlefiles0(event: any) {
    if (event.target.files != null && event.target.files.length > 0 || this.imgUrlforedit) {



      this.selctfiles = <File>event.target.files;
      for (let index = 0; index < File.length; index++) {

        const reader = new FileReader();
        reader.onload = function (e: any) {
          reader.readAsDataURL(e.target.files[index]);

          $('#me').attr('src', e.target?.result?.toString());
        }


      }



    }
    else {
      this.service.shop.image;
      $('#me').attr('src', "assets/r.png");
    }

  }

  // handlefiles1(event: any) {
  //   if (event.target.files != null && event.target.files.length > 0 || this.imgUrlforedit) {

  //     let i:Number= 0;
  //     if (this.imgUrlforedit) {
  //       $('#me').attr('src', this.imgUrlforedit[1]);

  //     }
  //     this.service.shop.image = event.target.files[1];

  //     const reader = new FileReader();
  //     reader.onload = function (e: any) {


  //       $('#me').attr('src', e.target?.result?.toString());
  //     }
  //     reader.readAsDataURL(this.service.shop.image[1]);
  //   }
  //   else {
  //     this.service.shop.image;
  //     $('#me').attr('src', "assets/r.png");
  //   }

  // }

  // handlefiles2(event: any) {
  //   if (event.target.files != null && event.target.files.length > 0 || this.imgUrlforedit) {

  //     let i:Number= 0;
  //     if (this.imgUrlforedit) {
  //       $('#me').attr('src', this.imgUrlforedit[2]);

  //     }
  //     this.service.shop.image = event.target.files;

  //     const reader = new FileReader();
  //     reader.onload = function (e: any) {


  //       $('#me').attr('src', e.target?.result?.toString());
  //     }
  //     reader.readAsDataURL(this.service.shop.image);
  //   }
  //   else {
  //     this.service.shop.image;
  //     $('#me').attr('src', "assets/r.png");
  //   }

  // }



  submit(data: any)
  {
    console.log(this.service.shop.image)
    console.log(this.id)

    let fd = new FormData();

    for (let index = 0; index < this.selctfiles.length; index++) {

      fd.append("image", this.selctfiles[index])
    }



    fd.append("shopName", data.shopName);
    fd.append("address", data.address);
    fd.append("phoneNum", data.phoneNum);
    fd.append("email", data.email);
    fd.append("userId", this.id)


    this.service._add_shop(fd).subscribe(res => {

    })
  }
}
