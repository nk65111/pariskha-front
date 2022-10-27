import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  quizzes:any=[]
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
      this.quizService.viewQuiz().subscribe(
        (data:any)=>{
          this.quizzes=data;
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

  deleteQuize(qid:any){
     Swal.fire({
      icon:"info",
      title:"Are you Sure !!",
      confirmButtonText:"delete",
      showCancelButton:true
     }).then((result)=>{
        if(result.isConfirmed){
          this.quizService.deleteQuiz(qid).subscribe(
            (data)=>{
                this.quizzes=this.quizzes.filter((quiz:any)=>{
                  return quiz.qid!=qid;
                })
                Swal.fire("Success!!","Quiz delete successfully",'success');
            },
            (error)=>{
              Swal.fire("Error !!","Someting went wrong try again",'error');
            }
          )
        }
     }
     ) 
  }

}
