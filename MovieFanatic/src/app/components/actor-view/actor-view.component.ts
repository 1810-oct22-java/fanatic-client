import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';
import { ActorApiService } from 'src/app/services/actor-api.service';

@Component({
  selector: 'app-actor-view',
  templateUrl: './actor-view.component.html',
  styleUrls: ['./actor-view.component.css']
})
export class ActorViewComponent implements OnInit {
  private id: string;


  constructor(
    public route: ActivatedRoute,
    public actorService: ActorApiService,
    public actor: Actor
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.actorService.setActorID(this.id);
  }

}
