import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { ActorViewComponent } from './components/actor-view/actor-view.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';

@NgModule({

  declarations: [
    AppComponent,
    MainViewComponent,
    MovieViewComponent,
    HeaderComponent,
    ProfileViewComponent,
    EditProfileComponent,
    ActorViewComponent,
    MovieReviewComponent,
    LoginComponent,
    SearchViewComponent,
    UserViewComponent,
    PopularMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
