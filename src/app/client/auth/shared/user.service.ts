import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User;
  roles: any;
  loginstatus = false;
  userdata: any;

  constructor(private url: UrlService, private http: HttpClient) { }

  _signup(data: any)
  {
    return this.http.post(this.url.mainUrl + 'user/signup', data);
  }

  getallrole()
  {
    this.http.get(this.url.mainUrl + 'role').subscribe(data => {
      this.roles = data;
    })
  }

  _signin(data:any)
  {
    return this.http.post(this.url.mainUrl + 'user/signin', data);
  }

  getuserdata()
  {
    var payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    var userId = payload.userId;
    let fd = new FormData();

    this.http.get(this.url.mainUrl + 'user/userdata/'+userId ).subscribe(data => {
      this.userdata = data
    })

  }

  _logout()
  {
    localStorage.removeItem('token');
    this.loginstatus= false
  }


  roleMatch(allowRoles:any):boolean
  {
      var isMatch=false;
      var payload=JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));

      var roles=payload.role;
    allowRoles.forEach((element: any) => {

        if (roles==element) {
          isMatch=true;
          return false;
        }
        else
        {
          isMatch = false
          return true;
          }
      });
      return isMatch;
  }
}
