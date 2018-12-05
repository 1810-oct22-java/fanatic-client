import { Component, OnInit } from '@angular/core';
import { PopularMoviesComponent } from '../popular-movies/popular-movies.component';
import { YearMoviesComponent } from '../year-movies/year-movies.component';
import { FeaturedMovieComponent } from '../featured-movie/featured-movie.component';
import { DramaticMoviesComponent } from '../dramatic-movies/dramatic-movies.component';
import { ComedicMoviesComponent } from '../comedic-movies/comedic-movies.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
