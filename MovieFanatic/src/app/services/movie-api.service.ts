import { Injectable } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieAPI';
import { MovieDBAPIConfig } from 'src/app/models/movieDBAPIConfig';
//import { ConfigAPI } from 'src/app/models/configAPI';
//import { ConfigAPIService} from 'src/app/services/config-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  private movieCFG = new MovieDBAPIConfig();
  private themovieDB: string;

  constructor(
    private movie: MovieAPI
//    ,
//    private config: ConfigAPI, 
//    private configService: ConfigAPIService
  ) {}

  public pull(id: string): MovieAPI {
    // build the search url
    this.themovieDB = this.movieCFG.BASE_URL + "movie/" + id + this.movieCFG.API_KEY; 
    
    // build the movie obj with what you get back
    this.movie.id = id;
    this.movie.title = "Bohemian Rhapsody";
    this.movie.poster_path = this.movieCFG.IMAGE_URL + "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg";
    this.movie.backdrop_path = this.getBackground("/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg");
    this.movie.release_date = "2018-10-24";
    this.movie.overview = "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.";

    //console.log(this.configService.data["api_key"]);

    return this.movie;
  }

  public getBackground(backdrop) {
    return {'background-image': `url(${this.movieCFG.IMAGE_URL}${backdrop})`};
  }

  
}
