import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigAPI } from '../models/configAPI';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  usr: User;
//  public usr:User;

  constructor(private http: HttpClient) { }

  // public validateUser(username: String, password: String) {
  public validateUser(username, password) {
    this.usr.username = username;
    this.usr.password = password;
    console.log(this.usr);
    return this.http.post<User>(ConfigAPI.spring_url + 'user/login/', this.usr);
  }

  private persistLogin(user: User) {
    localStorage.setItem('id', user.id.toString());
    localStorage.setItem('user_name', user.username);
    localStorage.setItem('loggedIn', 'true');
  }

  public getUserName(): string {
    return localStorage.getItem('user_name');
  }

  public getUserID(): number {
    return Number(localStorage.getItem('id'));
  }

  public isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('loggedIn');
    return (loggedIn === 'true');
  }

  public logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('loggedIn');
  }
}
