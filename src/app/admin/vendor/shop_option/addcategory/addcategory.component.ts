import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/client/auth/shared/user.service';
import { CategoryService } from '../../shared/category.service';
import { ShopService } from '../../shared/shop.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

   payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
   id = this.payload.userId;

  constructor(public catservice: CategoryService,public userservice: UserService,private shopservice: ShopService) { }

  ngOnInit(): void {
    this.catservice._get_all_category()
  }


  submit(data: any)
  {
    this.catservice.category.userId=this.id





    this.catservice._add_category(data).subscribe(res => {
      console.log(res);
      this.catservice._get_all_category();
    }, err => {
      console.log(err)
    });
  }

}
