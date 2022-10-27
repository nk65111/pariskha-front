import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  qid=0;
  title='';
  question={
    quiz:{
      qid:0
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
  constructor(private _route:ActivatedRoute,
    private _questionService:QuestionsService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this.title=this._route.snapshot.params['title'];
    this.question.quiz.qid=this.qid;

  }

  formSubmit(){

    if(this.question.content.trim()==''||this.question.content==null){
      return;
    }
    if(this.question.option1.trim()==''||this.question.option1==null){
      return;
    }
    if(this.question.option2.trim()==''||this.question.option2==null){
      return;
    }
    if(this.question.answer.trim()==''||this.question.answer==null){
      return;
    }
    this._questionService.addQuestion(this.question).subscribe(
      (data:any)=>{
         Swal.fire("Success !!","Question added successfully",'success').then((e)=>{
           this.router.navigate(['/admin/quiz/question/'+this.qid+'/'+this.title]);
         })
      },
      (error)=>{
          Swal.fire("Error","Something went wrong try again","error");
      }
    )
  }

}
