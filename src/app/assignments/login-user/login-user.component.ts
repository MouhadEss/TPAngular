import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from 'src/app/shared/user.service';
import { LoggingService } from 'src/app/shared/logging.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  
  constructor(private userService:UserService,private authService:AuthService, private router:Router) { }
  user:User;
  login="";
  password="";


  ngOnInit(): void {
  }

  onLogin(event){
    event.preventDefault();
    this.userService.getUser(this.login).subscribe(u=> this.user=u);
    if(this.user===null||this.user.password!=this.password){
      this.router.navigate(['/home']);
    }else{
      this.authService.logIn(this.user);
      this.router.navigate(['/home']);
    }

  }

}
