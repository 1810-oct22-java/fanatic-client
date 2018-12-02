import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
// import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieAPI } from './models/movieAPI';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    HeaderComponent,
    ProfileViewComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  //  Tabulator
  ],
  providers: [
    MovieAPI,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
