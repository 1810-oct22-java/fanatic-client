import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigAPI } from 'src/app/models/configAPI';
import { MovieAPI } from 'src/app/models/movieAPI';
import { CreditsAPI } from 'src/app/models/creditsAPI';
import { OMDBAPI } from 'src/app/models/OMDBAPI';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  constructor(private http: HttpClient) { }

  getMovie(id: string) {
    return this.http.get<MovieAPI>(ConfigAPI.base_url + 'movie/' + id + ConfigAPI.api_key);
  }

  getMoviesByString(query: string) {
    return this.http.get<MovieAPI>(ConfigAPI.base_url + 'search/movie' + ConfigAPI.api_key + ConfigAPI.query_params + query);
  }

  getPopularMovies() {
    return this.http.get<MovieAPI[]>(ConfigAPI.base_url + 'discover/movie' + ConfigAPI.api_key + '&sort_by=popularity.desc');
  }

  getCredits(id: string) {
    return this.http.get<CreditsAPI[]>(ConfigAPI.base_url + 'movie/' + id + '/credits' + ConfigAPI.api_key);
  }

  getOMDB(imdb_id: string) {
    return this.http.get<OMDBAPI>(ConfigAPI.omdapi_base_url + '?i=' + imdb_id + 
      '&plot=full&' + ConfigAPI.omdapi_key);
  }

  formatImage(image: string): string {
    return ConfigAPI.image_url + image;
  }

  /**
   * Angular doesn't like url() because its "unsafe"  The URL needs to be scrubbed
   * as a SafeStyle
   * @param backdrop 
   */
  public getBackground(backdrop) {
    return {'background-image': `url(${ConfigAPI.image_url}${backdrop})`};
  }
}
