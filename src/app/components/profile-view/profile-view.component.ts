import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user = new NewUser();
  constructor(
    public route: ActivatedRoute,
    private showUser: UserService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.findById();
  }

  findById() {
   const id = this.loginService.getUserID();
   this.showUser.findById(id).subscribe(user => this.user = user);
   console.log(id);
  }

}
