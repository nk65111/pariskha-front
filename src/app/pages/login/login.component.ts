import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userData={
     "username":'',
     "password":''
  }

  constructor(private loginService:LoginService,private snack:MatSnackBar,private router:Router,private _login:LoginService) { }

  ngOnInit(): void {
    if(this._login.isUserLogin()){
      if(this._login.getUserAuthority()=="ADMIN"){
        this.router.navigate(['/admin'])
      }else{
        this.router.navigate(['/user-dashboard/0']);
      }
    }
  }

  public formLogin(){
    if(this.userData.username==undefined||this.userData.username==''||this.userData.username==null){
      this.snack.open("Please enter username",'',{
        duration:2000
      })
      return;
    }
    if(this.userData.password==undefined||this.userData.password==''||this.userData.password==null){
      this.snack.open("Please enter password",'',{
        duration:2000
      })
      return;
    }

    this.loginService.login(this.userData).subscribe(
      {
        next:(data:any)=>{
            this.loginService.loginUser(data.token);
            this.loginService.currentUser().subscribe(
              (user:any)=>{
                this.loginService.setUser(user);
                if(this.loginService.getUserAuthority()=='ADMIN'){
                  this.router.navigate(['/admin']);
                  this.loginService.loginStatusSubject.next(true);
                }else if(this.loginService.getUserAuthority()=='NORMAL'){
                  this.router.navigate(['/user-dashboard/0']);
                  this.loginService.loginStatusSubject.next(true);
                }else{
                  this.loginService.logout();
                }
              }
            )
        },
        error:(err)=>{
            console.log(err);
            this.snack.open('Bad Credential','',{
              duration:2000
            })
            console.log("error");
        }
      }
    )
  }

}
