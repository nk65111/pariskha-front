import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  qid=0;
  questions:any=[];
  title='';
  constructor(private _route:ActivatedRoute,private _question:QuestionsService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this.title=this._route.snapshot.params['title']
    this._question.getAllQuestions(this.qid).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(this.questions);
      },
      (error)=>{
        Swal.fire("Error !!","Failed in loding question","error");
      }
    )
  }

  deletQuestion(quesId:any){
    Swal.fire({
      icon:"info",
      title:"Do you Really want to delete",
      confirmButtonText:"Delete",
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this._question.deletQuestion(quesId).subscribe(
          (data)=>{
              this.questions=this.questions.filter((question:any)=>{
                 return question.quesId!=quesId;
              })
              this._snack.open("Delete Successfully",'',{
                duration:3000
              })
          },
          (error)=>{
            this._snack.open("error in delete",'',{
              duration:3000
            })
          }
        )
      }
    })
  }

}
