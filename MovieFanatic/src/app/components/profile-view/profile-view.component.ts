import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  title = 'User Profile';
  username = 'syoung11';
  password = 'password';
  firstname = 'Sean';
  lastname = 'Young';
  email = 'seanyoung@gmail';
  constructor(
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

}
