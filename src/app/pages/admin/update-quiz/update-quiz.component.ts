import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  qid=0;
  quizData:any=null;
  category:any=null;
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _category:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.qid= this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quizData=data;
        console.log(data);
      },
      (error)=>{
        Swal.fire("Error !!","failed in loding",'error');
      }
    )

    this._category.getCategory().subscribe(
      (data:any)=>{
        this.category=data;
      },
      (error)=>{
        Swal.fire("Error !!","Failed in loading",'error');
      }
    )
  }

  updateQuiz(){
     this._quiz.updateQuiz(this.quizData).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire("Success !!","Quiz Update successfully",'success').then((e)=>{
          this.router.navigate(['/admin/quizzes'])
        });
      },
      (error)=>{
        Swal.fire("Error !!","Something went wrong try again",'error');
      }
     )
  }

  

}
