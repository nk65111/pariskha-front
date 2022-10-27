import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { startWith } from 'rxjs';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  qid=0;
  quizData:any;
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
         this.quizData=data;
      },
      (error)=>{
        Swal.fire("Error !!","Error in loding data",'error');
      }
    )

   
  }

  startTest(){

    Swal.fire({
      icon:'info',
      title:'Do you want to Start',
      confirmButtonText:'Start',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this.router.navigate(['start/'+this.qid]);
      }
    }) 
  }

}
