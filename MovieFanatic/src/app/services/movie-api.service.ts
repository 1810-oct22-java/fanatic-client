import { Injectable } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieAPI';
import { ConfigAPI } from 'src/app/models/configAPI';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  
  private themovieDB: string;

  constructor(
    private movie: MovieAPI
  ) {}

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

    //console.log(this.movie.poster_path);

    return this.movie;
  }

  public getBackground(backdrop) {
    return {'background-image': `url(${ConfigAPI.image_url}${backdrop})`};
  }

  
}
