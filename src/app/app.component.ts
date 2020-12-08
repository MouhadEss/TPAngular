import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'Application de gestion des devoirs à rendre (Assignments)';
  loggedIn=this.authService.loggedIn;

  onInit(){
    
  }
  constructor(private authService:AuthService){}

  logOut(){
    this.authService.logOut();
  }



}
