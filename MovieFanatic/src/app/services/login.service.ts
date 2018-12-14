import { Injectable, OnInit } from '@angular/core';
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
  constructor(private http: HttpClient) { }

  public validateUser(username, password) {
    this.usr = new User(0, '', '', '', '');
    this.usr.username = username;
    this.usr.password = password;
    console.log(this.usr);
    console.log(ConfigAPI.spring_url + 'user/login/');

    return this.http.post<User>(ConfigAPI.spring_url + 'user/login/', this.usr);
  }

  public persistLogin(user: User) {
    localStorage.setItem('id', user.id.toString());
    localStorage.setItem('username', user.username);
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
