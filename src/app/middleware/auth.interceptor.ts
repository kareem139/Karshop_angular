import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {tap} from 'rxjs/operators';
@Injectable()

export class AuthInterceptor implements HttpInterceptor
{
  constructor(private router:Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    if (localStorage.getItem('token')!=null)
     {
      const clonReq=req.clone({
        headers:req.headers.set('authorization','Bearer '+localStorage.getItem('token'))
      });
      return next.handle(clonReq).pipe(
        tap(res=>{},
          err=>{
              if (err.status==500) {
                  localStorage.removeItem('token');
                this.router.navigateByUrl('/firsthome/home');
                console.log(err)
              }
              else (err.stasus==401)
              {
                this.router.navigateByUrl('/user/signin');
              }

          })
      )

    }
    else

      return next.handle(req.clone());

  }
}
