import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public service: UserService,private toaster: ToastrService,private router: Router) { }

  ngOnInit(): void {
  }



  submit(data:any)
  {

    this.service._signin(data.value).subscribe((res:any) => {
      this.toaster.success('login success');
      localStorage.setItem('token', res.token);
     let payload = JSON.parse(window.atob(res.token.split('.')[1]));
     let role = payload.role;
      this.service.loginstatus = true;
      if (role=="Vendor") {
        this.router.navigateByUrl('/vendor/shoplist');
      } else {
        this.router.navigateByUrl('/firsthome/home');
      }

      this.service.userdata = res.userdata;

    }, err => {
      if (err.status == 401) {

        this.toaster.error('email not found or pass incorrect','opps failed auth')

      } else {
        this.toaster.error(err.error.message);
      }
      })
  }
}
