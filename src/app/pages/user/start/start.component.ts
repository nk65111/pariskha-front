import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid=0;
  questions:any;
  attempted=0;
  correctAns=0;
  marksGot=0;
  timer=0;
  totalTime=0;
  isSubmit=false;
  constructor(private location:LocationStrategy,
      private _route:ActivatedRoute,
      private _question:QuestionsService
    ) { }

  ngOnInit(): void {
    this.preventBack();
    this.qid=this._route.snapshot.params['qid'];
    console.log(this.qid);
    this._question.getTestQuestion(this.qid).subscribe(
      (data:any)=>{
        this.questions=data;
        
        this.timer=this.questions.length*2*60;
        this.totalTime=this.timer;
        console.log(this.questions);
        this.startTimer()
      },
      (error)=>{
        Swal.fire("Error","failed in loding question",'error');
      }
    )

  }

  preventBack(){
    history.pushState(null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null,  window.location.href);
    });
  }

  SubmitTest(){

    Swal.fire({
      icon:'info',
      title:'Do you really want to submit',
      showCancelButton:true,
      confirmButtonText:'Submit'
    }).then((result)=>{
      if(result.isConfirmed){
        this.evalQuiz();
      }
    })

  }

  startTimer(){
   let t= window.setInterval(()=>{
       if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
       }else{
         this.timer-=1;
       }
    },1000)
  }

  timeFormat(){
    let min=Math.floor(this.timer/60);
    let sec=this.timer-(min*60);
    return `${min} min : ${sec} sec`;
  }

  evalQuiz(){

       this._question.getEvaluate(this.questions).subscribe(
        (data:any)=>{
          this.attempted=data.attempted;
          this.correctAns=data.correctAns;
          this.marksGot=data.marksGot;
          this.marksGot=Number.parseInt(Number(this.marksGot).toFixed(2));
        },
        (error)=>{
          console.error(error);
        }
       )
 
    this.isSubmit=true;
  }

  print(){
    window.print();
  }
}
