import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  public getAllQuestions(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`,question);
  }

  public deletQuestion(quesId:any){
    return this.http.delete(`${baseUrl}/question/${quesId}`);
  }

  public getTestQuestion(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  public getEvaluate(questions:any){
     return this.http.post(`${baseUrl}/question/eval-question`,questions);
  }
}
