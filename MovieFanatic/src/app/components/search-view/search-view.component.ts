import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';
import { ConfigAPI } from 'src/app/models/configAPI';
import { ColorService } from 'src/app/services/color.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})

export class SearchViewComponent implements OnInit {

  private movieArray = [];
  private query: string;
  private total_pages: number;
  private current_page: number;
  private tempMovie = [];

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService, 
    public colorService: ColorService
  ) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.getAllMovies();
  }

  getAllMovies(){ 
    this.movieService.getMoviesByString(this.query).subscribe(
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
