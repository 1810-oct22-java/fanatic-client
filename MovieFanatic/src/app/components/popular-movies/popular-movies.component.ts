import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../../services/movie-api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  private movieArray = [];
  private total_pages: number;
  private current_page: number;
  private tempMovie = [];

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
                    this.tempMovie.push(movie);
                    this.total_pages = this.tempMovie[0].total_pages;
                    console.log(this.total_pages);
                    this.current_page = 1;
                    
                    for (let i = 0; i < this.tempMovie[0].results.length; i++){
                      this.movieArray.push({"title": this.tempMovie[0].results[i].original_title,
                                            "Poster" : this.movieService.formatImage(this.tempMovie[0].results[i].poster_path) });
                    }
                    console.log(this.movieArray);
                  });
  }

}
