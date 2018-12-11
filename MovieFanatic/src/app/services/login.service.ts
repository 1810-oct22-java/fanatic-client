import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userList: User[] = [];

  constructor() {
    this.userList.push(new User(3, 'admin', 'admin@movie.com', 'password', 'password'));
  }

  public validateUser(username: string, password: string): User {
    for (const u of this.userList) {
      if (u.user_name.toLowerCase() === username) {
        if (u.password.toLowerCase() === password) {
          this.persistLogin(u);
          return u;
        }
      }
    }
    return null;
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
