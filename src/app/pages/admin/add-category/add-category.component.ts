import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:''
  }
  constructor(private categoryService:CategoryService,private _snake:MatSnackBar) { }

  ngOnInit(): void {
  
  }
  formSubmit(){
    if(this.category.title.trim()==''||this.category.title==null){
      this._snake.open("title must be enter",'',{
        duration:2000
      });
      return;
    }
    this.categoryService.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("Success !!","category is successfully added",'success');
        console.log(data);
      },
      (error)=>{
        Swal.fire("Error !!","Something went wrong",'error');
      }
    );
  }
}
