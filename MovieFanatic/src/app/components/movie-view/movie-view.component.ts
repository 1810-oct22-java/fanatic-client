import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieAPI } from 'src/app/models/movieAPI';
import { ConfigAPI } from 'src/app/models/configAPI';
import { CastAPI } from 'src/app/models/castAPI';
import { CrewAPI } from 'src/app/models/crewAPI';
import { OMDBAPI } from 'src/app/models/OMDBAPI';
import { ColorService } from 'src/app/services/color.service'

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  private id: string;
  public movie: MovieAPI;
  public ratings: OMDBAPI;
  public credits = [];
  public cast = [];
  public castList = "";
  public directorList="";
  public producerList="";
  
  constructor(
    public route: ActivatedRoute,
    public movieService: MovieAPIService, 
    public colorService: ColorService
  ) {}

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
                                  this.getRottenTomatoes();
                                  this.getMovieFanatic();
                                });
                  });

    // get the credits of the movie
    this.movieService.getCredits(this.id).subscribe(
      (creditList) => {
                        this.credits.push(creditList);
                        this.cast = this.sortCast(this.credits[0].cast);
                        this.getCastList();
                        this.getDirectorProducerLists(this.credits[0].crew);
                      }
    );
  }
  
  /**
   * Angular doesn't like url() because its "unsafe"  The URL needs to be scrubbed
   * as a SafeStyle
   * @param backdrop 
   */
  public getBackground() {
    return {'background-image': `url(${ConfigAPI.image_url}${this.movie.backdrop_path})`};
  }

  time_convert(num) { 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + ' hr ' + minutes + ' min';         
  }

  date_convert(date: string) {
    var parts = date.split('-');
    return parts[0];
  }

  /**
   * grabs the Rotten Tomatoes score from the ratings array
   */
  private getRottenTomatoes() {
    this.ratings.Ratings.forEach(element => {
      if(element.Source == "Rotten Tomatoes") {
        this.ratings.RottenTomatoes = element.Value;
      }
    });
  }

  /**
   * get the Movie Fanatic rating score
   */
  private getMovieFanatic() {
    this.ratings.MovieFanatic = "4/5";
  }

  /**
   * sort the cast list
   * @param data 
   */
  public sortCast(data: CastAPI[]): CastAPI[] {
    // sort the cast list based on the credit order
     return data.sort((c1, c2) => {
      if(c1.order > c2.order) {
        return 1;
      }
      if(c1.order < c2.order) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * populate the cast list html
   */
  private getCastList() {
    let castList = this.buildCastLink(this.cast[0].name, this.cast[0].id);
    let first = true;

    this.cast.forEach(element => {
      if(first) {
        first=false;
      } 
      else {
        castList = castList + "&nbsp;&bull;&nbsp;" + this.buildCastLink(element.name, element.id);
      }
    });
      
    this.castList = castList;
  }

  /**
   * build the cast list link html
   * @param name 
   * @param link 
   */
  private buildCastLink(name: string, link: string) {
    return `<a class='cast-link' href='/actor/${link}'>${name}</a>`;
  }

  /**
   * populate the Director and Producer html
   * @param data 
   */
  private getDirectorProducerLists(data: CrewAPI[]) {
    let firstDirector=true;
    let firstProducer=true;

    data.forEach(element => {
      if(element.job == "Director") {
        if(firstDirector) {
          firstDirector = false;
          this.directorList = element.name;
        }
        else {
          this.directorList = this.directorList + ", " + element.name;
        }
      }
      else if(element.job == "Producer") {
        if(firstProducer) {
          firstProducer = false;
          this.producerList = element.name;
        }
        else {
          this.producerList = this.producerList + ", " + element.name;
        }
      }
    });
  }
}
