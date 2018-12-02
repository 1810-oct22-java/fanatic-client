import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { ConfigAPI } from 'src/app/models/configAPI';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorApiService {

  private theactorDB: string;
  public id: string;

  constructor(
    private actor: Actor,
  ) { }

  public pull(id: string): Actor {
    // build the search url
    this.theactorDB = ConfigAPI.base_url + "person/" + id + ConfigAPI.api_key; 
    
    // build the movie obj with what you get back
    this.actor.id = id;
    this.actor.firstName = "Nicholas";
    this.actor.lastName = "Cage";
    this.actor.pic_path = "https://i.kym-cdn.com/photos/images/original/000/456/353/05a.jpg";
    this.actor.age = 54;

    return this.actor;

  }

  /**
   * Angular doesn't like url() because its "unsafe"  The URL needs to be scrubbed
   * as a SafeStyle
   * @param backdrop 
   */

  public setActorID(id: string) {
    // build the search url
    this.theactorDB = ConfigAPI.base_url + "person/" + id + ConfigAPI.api_key;
    this.id = id; 
  }

  // public getMovie(): Observable<MovieAPI[]> {
  //   return this.http.get(this.themovieDB)
  //   .map((response: Response) => <MovieAPI[]> response.json())
  //   .do(data => console.log(JSON.stringify(data)));
  // }
}


