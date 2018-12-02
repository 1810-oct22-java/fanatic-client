import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';

const routes: Routes = [
  { path:'', redirectTo:'', pathMatch: 'full' },
  { path:'movie/:id', component: MovieViewComponent },
  { path:'actor/:id', component: ActorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
