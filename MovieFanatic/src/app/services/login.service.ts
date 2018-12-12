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

  constructor(private http: HttpClient) { }

  // public validateUser(username: String, password: String) {
  public validateUser(username, password) {
    return this.http.get<User>(ConfigAPI.spring_url + 'login/' + username + '/' + password);
  }

  private persistLogin(user: User) {
    localStorage.setItem('id', user.id.toString());
    localStorage.setItem('user_name', user.user_name);
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
