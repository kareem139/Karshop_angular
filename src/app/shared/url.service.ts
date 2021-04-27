import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  mainUrl:string= 'http://localhost:3000/';

  constructor() { }
}
