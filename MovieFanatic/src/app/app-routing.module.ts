import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'movie', pathMatch: 'full' },
  { path: 'movie', component: MovieViewComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
