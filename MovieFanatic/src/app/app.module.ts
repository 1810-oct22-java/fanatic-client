import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
//import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieAPI } from './models/movieAPI';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  //  Tabulator
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
