import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  output: string;
  currentUser: User;

  constructor(private loginService: LoginService) {
    console.log('inside of login');
  }

  ngOnInit() {
  }

  // login() {
  //   this.currentUser = this.loginService.validateUser(this.username, this.password);
  //   if (this.currentUser == null || this.currentUser === undefined) {
  //     this.output = 'Invalid Credentials';

  //   } else {
  //     this.output = `Welcome ${this.username}`;
  //   }
  // }
}

