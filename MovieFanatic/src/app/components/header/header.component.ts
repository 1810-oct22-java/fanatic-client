import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
/*login component*/
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public query: string;

  username = '';
  password = '';
  output: string;
  currentUser: User;

  constructor(
    public router: Router,
    private loginService: LoginService) {
  }

  ngOnInit() {
  }
  /**
   * user keyed in search and we need to send it to the search results window
   */
  enterPressed() {
    var query: string = this.query.replace(/\s/g, '+');
    this.query = '';
    // change the spaces to plusses and sends it on its way
    this.router.navigateByUrl('/movie_results/' + query);
  }

  /*Login*/
  login() {
    this.currentUser = this.loginService.validateUser(this.username, this.password);
    if (this.currentUser == null || this.currentUser === undefined) {
      this.output = 'Invalid Credentials';

    } else {
      this.output = `Welcome ${this.username}`;
    }
  }
}
