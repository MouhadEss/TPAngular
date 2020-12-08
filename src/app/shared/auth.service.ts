import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../assignments/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  userConnecter:User;
  constructor(private userService:UserService) { }

  logIn(user:User){
    this.loggedIn=true;
    this.userConnecter=user;
    console.log("vous etes connecté");
  }

  logOut(){
    this.loggedIn=false;
    console.log("vous etes déconnecté");
  }

  isAdmin(){
    const isUserAdmin = new Promise((resolve,reject)=>{resolve(this.userConnecter.isAdmin)});
    return isUserAdmin;
  }

  isLogged(){
    
    const isUserLogged = new Promise((resolve,reject)=>{resolve(this.loggedIn)});
    return isUserLogged;
  }

}
