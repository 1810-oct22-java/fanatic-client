import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Review } from '../models/review';
import { ConfigAPI } from 'src/app/models/configAPI';
import { ReviewCount } from 'src/app/models/reviewCount';
import { ReviewBean } from 'src/app/models/reviewBean';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getMovieReviews(movie_id: number, source_id: number) {
    return this.http.get<Review[]>(ConfigAPI.spring_url + 'review/view/'
      + movie_id + '/' + source_id);
  }

  getReviewCount(movie_id: string) {
    console.log(ConfigAPI.spring_url + 'view/' + movie_id);
    return this.http.get<ReviewCount>(ConfigAPI.spring_url + 'view/' + movie_id);
  }

  newReview(review: ReviewBean) {
    const url = ConfigAPI.spring_url + 'review/new';

    console.log(review + '   ' + url);
    return this.http.put<ReviewBean>(url, review, this.httpOptions);
  }
}
