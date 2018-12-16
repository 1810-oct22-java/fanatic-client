import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  
  public username : string;
  public favArray = [];
  public favMovieArray = [];
  public tempMovie: MovieAPI;

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getFavorites();
  }

  getFavorites() {
    this.movieService.getFavoritesByUsername(this.username).subscribe(
      (favorite) => {
        for (let i = 0; i < favorite.length; i++) {
          this.favArray.push(favorite[i].movie_id);
        }
        this.getFavMovies();
      }
    );
  }

  getFavMovies() {
    let num;
    if (this.favArray.length > 6) {
      num = 6;
    } else {
      num = this.favArray.length;
    }
    for (let i = 0; i < num; i++) {
      this.movieService.getMovie(this.favArray[i]).subscribe(
        (movie) =>  {
                      this.tempMovie = movie;
                      this.tempMovie.poster_path = this.movieService.formatPosterImage(this.tempMovie.poster_path);
                      this.favMovieArray.push(movie);
        });
    }
  }

}
