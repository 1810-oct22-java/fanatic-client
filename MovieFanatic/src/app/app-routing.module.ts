import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { MovieReviewComponent } from 'src/app/components/movie-review/movie-review.component';
import { LoginComponent } from './components/login/login.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'movie', component: MovieViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie/:id', component: MovieViewComponent },
  { path: 'movie/review/:id', component: MovieReviewComponent },
  { path: 'actor/:id', component: ActorViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
