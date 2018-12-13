import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
/*login component*/
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
// import { httpFactory } from '@angular/http/src/http_module';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('cancelBtn') closeBtn: ElementRef;
  public query: string;

  username = '';
  password = '';
  output: string;
  public currentUser: User;
  //currentUser.subscribe(User);

  constructor(
    public router: Router,
    public loginService: LoginService) {
  }

  ngOnInit() {
  }
  /**
   * user keyed in search and we need to send it to the search results window
   */
  enterPressed() {
    const query: string = this.query.replace(/\s/g, '+');
    this.query = '';
    // change the spaces to plusses and sends it on its way
    this.router.navigateByUrl('/movie_results/' + query);
  }

  /*Login*/

  login() {
    const currentUser = this.loginService.validateUser(this.username, this.password);
    if (this.currentUser == null || this.currentUser === undefined) {
      console.log('Invalid Credentials' + this.username);
      this.output = 'Invalid Credentials';

    } else {
      this.closeBtn.nativeElement.click();
    }
  }


  // login(username: string, password: string) {
  //   this.loginService.validateUser(this.username, this.password);//.subscribe(this.username,this.password);
  // }

  // login() {
  //   this.loginService.validateUser().subscribe(
  //   (user) => {
  //     this.username.push(user);
  //     this.password.push(user);
  //   }
  //   )
  // }

  logout() {
    this.loginService.logout();
  }
}
