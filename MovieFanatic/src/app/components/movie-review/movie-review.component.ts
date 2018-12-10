import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';
import { OMDBAPI } from 'src/app/models/OMDBAPI';
import { Review } from 'src/app/models/review';


@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  public id: string;
  public movie: MovieAPI;
  public ratings: OMDBAPI;

  // table vars
  public dataSource;
  //  = [
  //   new Review(1, 'bob', '10-20-2000', 'Bobby', 2, 'or even clipped your toe nails', '10-20-2000', 2000, 50),
  //   new Review(2, 'chester', '10-20-2000', 'Bobby', 3, 'or played a video game', '10-14-2018', 100, 20),
  //   new Review(2, 'lester', '10-20-2000', 'Bobby', 1, 'You could have went bowling.', '10-14-2018', 100, 20),
  //   new Review(2, 'carmen', '10-20-2000', 'Bobby', 4, 'I want some popcorn.', '10-14-2018', 100, 20),
  //   new Review(2, 'bart', '10-20-2000', 'Bobby', 3, 'I cant believe it either.', '10-14-2018', 100, 20),
  //   new Review(2, 'smoking', '10-20-2000', 'Bobby', 1, 'I cant believe I watched the whole thing.', '10-14-2018', 100, 20)
  // ];

  public add_rating = 0;

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
                                  this.movieService.getMovieReviews('399360','1').subscribe(
                                    (reviewList) => {
                                      this.dataSource = reviewList;
                                    }
                                  );
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

  getStars(rating: number) {

    return '<i class="fas fa-star"></i>';
  }
}
