import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../shared/brand.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {
  payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
  id = this.payload.userId;

  constructor(public brandservice: BrandService) { }

  ngOnInit(): void {
    this.brandservice._get_all_brand();
  }

  submit(data: any)
  {
    this.brandservice.brand.userId = this.id;
    this.brandservice._add_brand(data).subscribe(res => {
      this.brandservice._get_all_brand();
    })
  }

}
