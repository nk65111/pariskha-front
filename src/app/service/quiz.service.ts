import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public viewQuiz(){
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz:any){
     return this.http.post(`${baseUrl}/quiz/`,quiz);
  }

  public deleteQuiz(qid:any){
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  public getQuiz(qid:any){
   return this.http.get(`${baseUrl}/quiz/${qid}`);
  }
  
  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/`,quiz);
  }

  public categoryQuiz(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  public activeQuizzes(){
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  public activeCategoryQuizzes(cid:any){
     return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
