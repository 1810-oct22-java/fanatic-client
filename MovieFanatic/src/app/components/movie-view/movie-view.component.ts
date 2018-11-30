import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';
import { MovieAPI } from 'src/app/models/movieAPI';
import { MovieAPIService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  //tabulator: Tabulator = new Tabulator();
  //movie: MovieAPI = new MovieAPI();
  //movieService: MovieAPIService = new MovieAPIService();
  private id: string;

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService,
    public movie: MovieAPI
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.setMovieID(this.id);
    



    // Bohemian Rhapsody 424694
    this.movie = this.movieService.pull(this.id);
//    this.movie.id = this.route.snapshot.paramMap.get('id');
//    this.movie.name = "Bohemian Rhapsody";
   
    //this.tabulator = new Tabulator("#example-table", {});
  }

}
