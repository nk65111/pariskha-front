import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  category:any=[];
  constructor(private _category:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._category.getCategory().subscribe(
      (data)=>{
        this.category=data;
      },
      (error)=>{
        this._snack.open("Error in loding category",'',{
          duration:2000
        })
      }
    )
  }

}
