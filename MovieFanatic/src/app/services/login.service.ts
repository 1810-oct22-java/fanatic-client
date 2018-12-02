import { Injectable } from '@angular/core';
import { User }  from  '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userList: User[] = [];
  
  constructor() { 
    this.userList.push(new User('admin','password'));
  }
  public validateUser(username: string, password: string){
    for(const u of this.userList){
      if(u.username.toLowerCase() == username){
        if(u.username.toLowerCase() == password){
          return u;
        }
      }
    }
return null;
  }
}
