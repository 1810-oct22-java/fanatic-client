import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
//import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { ActorViewComponent } from './components/actor-view/actor-view.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieAPI } from './models/movieAPI';
import { Actor } from './models/actor';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    ActorViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  //  Tabulator
  ],
  providers: [ 
    MovieAPI,
    Actor,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
