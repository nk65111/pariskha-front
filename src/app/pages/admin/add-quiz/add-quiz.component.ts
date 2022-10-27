import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  category:any=[]

  quizData={
    "title":'',
    "description":'',
    "maxMarks":'',
    "numberOfQuestion":'',
    "active":true,
    "category":{
      "cid":''
    }
  }
  constructor(private _category:CategoryService,private _quiz:QuizService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._category.getCategory().subscribe(
      (data:any)=>{
        this.category=data;
        // console.log(data);
      },
      (error)=>{
          console.log(error);
          Swal.fire("Error!!","Server failed to loding data",'error');
      }
    );
  }

  formSubmit(){
    if(this.quizData.title.trim()==''||this.quizData.title==null){
        this._snack.open('Title Required','',{
          duration:2000
        })
        return;
    }

    this._quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
         Swal.fire("Success !!","Quiz is added",'success');
         console.log(data);
         this.quizData={
          "title":'',
          "description":'',
          "maxMarks":'',
          "numberOfQuestion":'',
          "active":true,
          "category":{
            "cid":''
          }
        }
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!","Someting went wrong try again",'error');
      }

    )
    
  }

}
