import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../../services/movie-api.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  public favMovieArray = [];
  public total_pages: number;
  public current_page: number;
  public tempFavMovie = [];

  constructor(
    public movieService: MovieAPIService
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.movieService.getComedies().subscribe(
      (movie) =>  {
                    console.log(movie);
                    this.tempFavMovie.push(movie);
                    this.total_pages = this.tempFavMovie[0].total_pages;
                    console.log(this.total_pages);
                    this.current_page = 1;
                    for (let i = 0; i < 6; i++) {
                      this.favMovieArray.push({'title': this.tempFavMovie[0].results[i].original_title,
                                            'Poster' : this.movieService.formatImage(this.tempFavMovie[0].results[i].poster_path),
                                            'id' : this.tempFavMovie[0].results[i].id  });
                    }
                    console.log(this.favMovieArray);
                  });
  }

}
