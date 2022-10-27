import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
   cid=0;
   quizzes:any=[];
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _snack:MatSnackBar) { }

  ngOnInit(): void {

    this._route.params.subscribe((params)=>{
    this.cid=params['cid'];
      if(this.cid==0){
        this._quiz.activeQuizzes().subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);
          },
          (error)=>{
            this._snack.open("Error in loding quiz",'',
            {
              duration:3000
            })
          }
        )
      }
      else{
        this._quiz.activeCategoryQuizzes(this.cid).subscribe(
          (data:any)=>{
            this.quizzes=data;
          },
          (error)=>{
            console.log(error);
          }
        )
        
      }
    })
    
  }

}
