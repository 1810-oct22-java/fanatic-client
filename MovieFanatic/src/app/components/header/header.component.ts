import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public query: string;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  /**
   * user keyed in search and we need to send it to the search results window
   */
  enterPressed() {
    const query: string = this.query.replace(/\s/g, '+');
    this.query = '';
    // change the spaces to plusses and sends it on its way
    this.router.navigateByUrl('/movie_results/' + query);
  }
}
