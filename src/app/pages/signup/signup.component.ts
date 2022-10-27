import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private snack:MatSnackBar,private _login:LoginService,) { }

  public user={
    "username":'',
    "password":'',
    "firstName":'',
    "lastName":'',
    "email":'',
    "phone":''
  }

  public userType={
    "role":'',
    "admin":"ADMIN",
    "normal":"NORMAL",
  }

  ngOnInit(): void {
    if(this._login.isUserLogin()){
      if(this._login.getUserAuthority()=="ADMIN"){
        this.router.navigate(['/admin'])
      }else{
        this.router.navigate(['/user-dashboard/0']);
      }
    }
  }

  formSubmit(){
    console.log(this.userType.role+"****")
    if(this.user.username.length==0||this.user.username==null){
      this.snack.open('User name is required..','',{
        duration:2000
      })
      return;

    }
    this.userService.addUser(this.user,this.userType.role).subscribe(
      {
        next: (data:any)=>{
          if(data!=null){
          Swal.fire('Succefully done',`user id is ${data.id}`,'success') 
          console.log(data);
          }else{
            this.snack.open('Something went wrong..',``,{
              duration:2000
            })
          }
        },
        error: (err) =>{
          this.snack.open('Something went wrong..',`${err}`,{
             duration:2000
             })
        },
        
      }
    );
  }

}
