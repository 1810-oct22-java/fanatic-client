import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { ProfileViewComponent } from 'src/app/components/profile-view/profile-view.component';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie/424694', pathMatch: 'full' },
  { path: 'movie/:id', component: MovieViewComponent },
  { path: 'profile-view', component: ProfileViewComponent},
  { path: 'edit-profile', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
