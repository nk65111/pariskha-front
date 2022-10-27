import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  
  public getCategory(){
   return this.http.get(`${baseUrl}/category/`);
  }

  public deleteCategory(cid:any){
    return this.http.delete(`${baseUrl}/category/${cid}`);
  }

  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/`,category);
  }
}
