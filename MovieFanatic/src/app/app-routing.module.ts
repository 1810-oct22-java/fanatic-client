<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { ProfileViewComponent } from 'src/app/components/profile-view/profile-view.component';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { MovieReviewComponent } from 'src/app/components/movie-review/movie-review.component';
import { LoginComponent } from './components/login/login.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { HeaderComponent } from './components/header/header.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainViewComponent},
  { path: 'movie', component: MovieViewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'movie_results/:query', component: SearchViewComponent, runGuardsAndResolvers: 'always'},
  { path: 'movie/:id', component: MovieViewComponent},
  { path: 'movie/review/:id', component: MovieReviewComponent},
  { path: 'actor/:id', component: ActorViewComponent },
  { path: 'profile-view', component: ProfileViewComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'user-profile', component: UserViewComponent },
  { path: 'profile-view/:id', component: ProfileViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from 'src/app/components/movie-view/movie-view.component';
import { ProfileViewComponent } from 'src/app/components/profile-view/profile-view.component';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { MovieReviewComponent } from 'src/app/components/movie-review/movie-review.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { HeaderComponent } from './components/header/header.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainViewComponent},
  { path: 'movie', component: MovieViewComponent},
  { path: 'movie_results/:query', component: SearchViewComponent, runGuardsAndResolvers: 'always'},
  { path: 'movie/:id', component: MovieViewComponent},
  { path: 'movie/review/:id', component: MovieReviewComponent},
  { path: 'actor/:id', component: ActorViewComponent },
  { path: 'profile-view', component: ProfileViewComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'user-profile', component: UserViewComponent },
  { path: 'profile-view/:id', component: ProfileViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 9809e184ec3770f980361ff362d145efc30afabc
