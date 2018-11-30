import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
import { MovieAPI } from 'src/app/models/movieAPI';
import { ConfigAPI } from 'src/app/models/configAPI';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  
  private themovieDB: string;
  public id: string;

  constructor(
    private movie: MovieAPI,
    //private http: Http
  ) {}

  /**
   * collects the movie information from the API and returns the movie obj
   * @param id 
   */
  public pull(id: string): MovieAPI {
    // build the search url
    this.themovieDB = ConfigAPI.base_url + "movie/" + id + ConfigAPI.api_key; 
    
    // build the movie obj with what you get back
    this.movie.id = id;
    this.movie.title = "Bohemian Rhapsody";
    this.movie.poster_path = ConfigAPI.image_url + "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg";
    this.movie.backdrop_path = this.getBackground("/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg");
    this.movie.release_date = "2018-10-24";
    this.movie.overview = "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.";

    //console.log(this.getJSON);

    return this.movie;
  }

  /**
   * Angular doesn't like url() because its "unsafe"  The URL needs to be scrubbed
   * as a SafeStyle
   * @param backdrop 
   */
  public getBackground(backdrop) {
    return {'background-image': `url(${ConfigAPI.image_url}${backdrop})`};
  }

  public setMovieID(id: string) {
    // build the search url
    this.themovieDB = ConfigAPI.base_url + "movie/" + id + ConfigAPI.api_key;
    this.id = id; 
  }

  // public getMovie(): Observable<MovieAPI[]> {
  //   return this.http.get(this.themovieDB)
  //   .map((response: Response) => <MovieAPI[]> response.json())
  //   .do(data => console.log(JSON.stringify(data)));
  // }
}
