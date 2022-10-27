import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   isLogin=false;
   user:any=null;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.isLogin=this.loginService.isUserLogin();
    this.user=this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLogin=this.loginService.isUserLogin();
      this.user=this.loginService.getUser();
    })
  }

  logout(){
    this.loginService.logout();
    window.location.reload();
  }

}
