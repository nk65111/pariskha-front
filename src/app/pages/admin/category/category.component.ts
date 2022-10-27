import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   categories:any=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
     this.categoryService.getCategory().subscribe(
      (data:any)=>{
         this.categories=data;
         console.log(data);
      },
      (error)=>{
        Swal.fire("Error !!","something went wrong try again","error");
      }
    )

  }

  deleteCategory(cid:any){

    Swal.fire({
      icon:"info",
      title:"are you sure !!",
      confirmButtonText:"delete",
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this.categoryService.deleteCategory(cid).subscribe(
          (data)=>{
            Swal.fire("Success !!","Category delete Successfully",'success');
            this.categories=this.categories.filter((category:any)=>{
                return category.cid!=cid;
            })
          },
          (error)=>{
            Swal.fire("Error !!","Something went wrong try again..",'error');
          }
        )
      }
    })

    
  }

}
