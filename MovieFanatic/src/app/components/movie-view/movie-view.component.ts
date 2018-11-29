import { Component, OnInit } from '@angular/core';
import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  //tabulator: Tabulator = new Tabulator();
  movie: Movie = new Movie();

  constructor() { tabulator: Tabulator; movie: Movie }

  ngOnInit() {
    console.log("i am here") ;

    this.movie.name = "Bohemian Rhapsody";
   
    //this.tabulator = new Tabulator("#example-table", {});
    
    
  }

}
