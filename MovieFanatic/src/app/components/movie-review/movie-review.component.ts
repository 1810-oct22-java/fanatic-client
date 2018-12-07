import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';
import { OMDBAPI } from 'src/app/models/OMDBAPI';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  public id: string;
  public movie: MovieAPI;
  public ratings: OMDBAPI;

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    // get the movie data
    this.movieService.getMovie(this.id).subscribe(
      (movie) =>  {
                    this.movie = movie;
                    this.movie.poster_path = this.movieService.formatImage(this.movie.poster_path);
                    this.movieService.getOMDB(this.movie.imdb_id).subscribe(
                      (omdb) => {
                                  this.ratings = omdb;
                                });
                  });
  }

  time_convert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + ' hr ' + minutes + ' min';
  }

  date_convert(date: string) {
    const parts = date.split('-');
    return parts[0];
  }
}
