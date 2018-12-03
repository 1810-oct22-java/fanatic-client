import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../../services/movie-api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  private popMovieArray = [];
  private total_pages: number;
  private current_page: number;
  private tempPopMovie = [];

  constructor(
    public movieService: MovieAPIService
  ) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies(){ 
    this.movieService.getPopularMovies().subscribe(
      (movie) =>  {
                    console.log(movie);
                    this.tempPopMovie.push(movie);
                    this.total_pages = this.tempPopMovie[0].total_pages;
                    console.log(this.total_pages);
                    this.current_page = 1;
                    
                    for (let i = 0; i < 6; i++){
                      this.popMovieArray.push({"title": this.tempPopMovie[0].results[i].original_title,
                                            "Poster" : this.movieService.formatImage(this.tempPopMovie[0].results[i].poster_path) });
                    }
                    console.log(this.popMovieArray);
                  });
  }

}
