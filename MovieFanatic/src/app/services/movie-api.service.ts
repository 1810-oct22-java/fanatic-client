import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigAPI } from 'src/app/models/configAPI';
import { MovieAPI } from 'src/app/models/movieAPI';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  constructor(private http: HttpClient) { }

  getMovie(id: string) {
    return this.http.get<MovieAPI>(ConfigAPI.base_url + 'movie/' + id + ConfigAPI.api_key);
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
