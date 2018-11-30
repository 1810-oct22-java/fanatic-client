import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigAPIService {
  data;
 
  constructor(public http:Http) {
//      this.http.get("assets/theMovieDBConfig.json")
//              .subscribe(res => this.data = res.json());
  }
}
