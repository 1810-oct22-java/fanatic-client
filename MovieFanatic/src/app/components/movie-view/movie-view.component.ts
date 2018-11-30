import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';
import { ConfigAPI } from 'src/app/models/configAPI';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  //tabulator: Tabulator = new Tabulator();
  private id: string;
  public movie: MovieAPI;

  private something = [];

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovie(this.id).subscribe(
      (movie) =>  {
                    this.movie = movie;
                    this.movie.poster_path = this.movieService.formatImage(this.movie.poster_path);
                    console.log(this.movie.poster_path);
                  }
    );

    //this.tabulator = new Tabulator("#example-table", {});
  }
  
  /**
   * Angular doesn't like url() because its "unsafe"  The URL needs to be scrubbed
   * as a SafeStyle
   * @param backdrop 
   */
  public getBackground() {
    return {'background-image': `url(${ConfigAPI.image_url}${this.movie.backdrop_path})`};
  }
}
