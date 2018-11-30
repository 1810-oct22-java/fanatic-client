import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';

@Component({
  selector: 'app-actor-view',
  templateUrl: './actor-view.component.html',
  styleUrls: ['./actor-view.component.css']
})
export class ActorViewComponent implements OnInit {

  actor: Actor = new Actor();


  constructor() {tabulator: Tabulator; actor: Actor}

  ngOnInit() {
    this.actor.firstName = "Nicholas";
    this.actor.lastName = "Cage";
    this.actor.age = 54;
    this.actor.gender = 'Male';
  }

}
