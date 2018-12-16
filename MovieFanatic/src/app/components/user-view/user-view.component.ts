import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';
import { LoginService } from 'src/app/services/login.service';
import { ReviewApiService } from 'src/app/services/review-api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  public username: string;
  public favArray = [];
  public favMovieArray = [];
  public tempMovie: MovieAPI;
  score = 0;

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService,
    public reviewService: ReviewApiService,
    public loginService: LoginService
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getFavorites();
    // this.getMFScore();
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

  // getMFScore() {
  //   this.reviewService.getApprovals(this.username).subscribe(
  //     (approvals) => {
  //       let thumbs_up = 0;
  //       let thumbs_down = 0;

  //       // count the thumbs up and thumbs down
  //       approvals.forEach(element => {
  //         if (element.thumb === 1) {
  //           thumbs_up++;
  //         } else {
  //           thumbs_down++;
  //         }
  //       });

  //       // do the math
  //       if ((thumbs_down + thumbs_up) !== 0) {
  //         this.score = thumbs_up / (thumbs_down + thumbs_up);
  //       } else {
  //         this.score = 100;
  //       }
  //     }
  //   );
  // }

}
