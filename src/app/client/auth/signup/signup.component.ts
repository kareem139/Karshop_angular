import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: UserService, private router: Router,private toaster:ToastrService) { }
  imgUrlforedit = this.service.user.imageUrl.replace("\\", "/");

  ngOnInit(): void {
    this.service.getallrole();
  }

  handlefiles(event: any) {

    console.log(event.target.files[0])
    if (event.target.files != null && event.target.files.length > 0 || this.imgUrlforedit) {

      if (this.imgUrlforedit) {
        $('#me').attr('src', this.imgUrlforedit);
      }
      this.service.user.image = event.target.files[0];

      const reader = new FileReader();
      reader.onload = function (e: any) {


        $('#me').attr('src', e.target?.result?.toString());
      }
      reader.readAsDataURL(this.service.user.image);
    }
    else {
      this.service.user.image;
      $('#me').attr('src', "assets/r.png");
    }

  }

  submit(data:any)
  {

    let fd = new FormData();
    fd.append('image', this.service.user.image);
    fd.append('name', data.name);
    fd.append('password', data.password);
    fd.append('email', data.email);
    fd.append('roleId', data.roleId);
    fd.append('address', data.address);
    fd.append('gender', data.gender);
    fd.append('phoneNum', data.phoneNum);
    fd.append('payment', data.payment);
    fd.append('isActive', data.isActive);

    this.service._signup(fd).subscribe(res => {
      this.router.navigateByUrl('/firsthome/home');
    }, err => {
      if (err.Status==409) {
        this.toaster.error(err.error.message);
        this.router.navigateByUrl('/user/signup')
      } else {
          this.toaster.error(err.error.message)
      }
    })

  }



}
