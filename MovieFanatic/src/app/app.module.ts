import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
// import { Http } from '@angular/http';
// import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';
>>>>>>> 2f642f3e944ab3265f99dcd80ff7997fecd83014

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { ActorViewComponent } from './components/actor-view/actor-view.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';
<<<<<<< HEAD
import { UserViewComponent } from './components/user-view/user-view.component';
=======
>>>>>>> 2f642f3e944ab3265f99dcd80ff7997fecd83014

@NgModule({

  declarations: [
    AppComponent,
    MovieViewComponent,
    HeaderComponent,
    ProfileViewComponent,
<<<<<<< HEAD
    EditProfileComponent,
    ActorViewComponent,
    MovieReviewComponent,
    LoginComponent,
    SearchViewComponent,
    UserViewComponent
=======
    EditProfileComponent
    ActorViewComponent,
    MovieReviewComponent,
    LoginComponent,
    SearchViewComponent
>>>>>>> 2f642f3e944ab3265f99dcd80ff7997fecd83014
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
