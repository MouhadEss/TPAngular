import { Injectable } from '@angular/core';
import { User } from '../assignments/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[]=[
    {
      id:1,
      login:"Mouhad.ess",
      password:"TWQ32",
      isAdmin:true
    },
    {
      id:2,
      login:"Test",
      password:"test",
      isAdmin:false
    },
    {
      id:3,
      login:"Unice",
      password:"nice123",
      isAdmin:false
    }
  ];
  getNewId():number{
    return this.users.length+1;
  }

  addUser(user:User): Observable<String>{
    user.id=this.getNewId();
    this.users.push(user);
    
    return of("Assignment id :"+user.id+" Ajouté");
  }

  getUser(login):Observable<User>{
    return of(this.users.find(u=> u.login===login));
  }
  
}
