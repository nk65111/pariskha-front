import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginStatusSubject=new Subject<boolean>();
  public currentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  public login(userData:any){
   let token= this.http.post(`${baseUrl}/genrate-token`,userData);
   return token;
  }

  // loginuser : set token in storage
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  //isLogin :is user logged in or not
  public isUserLogin(){
    let token=localStorage.getItem("token");
    if(token==undefined||token.trim()==''||token==null){
      return false;
    }
    else{
      return true;
    }
  }

  // logut:remove token from localStorage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get Token
  public getToken(){
    return localStorage.getItem("token");
  }

  //setUser:set user in localstorage
  public setUser(user:any){
       localStorage.setItem("user",JSON.stringify(user));
       return true;
  }

  //getUser :get user from localstorage
  public getUser(){
   let user= localStorage.getItem("user");
   if(user!=undefined){
    return JSON.parse(user);
   }else{
    this.logout();
    return null;
   }
  }

  //get user authority
  public getUserAuthority(){
    let user=this.getUser();
    return user.authorities[0].authority;
    
  }
  
}
