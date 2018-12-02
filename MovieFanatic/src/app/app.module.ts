import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
//import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { Actor } from './models/actor';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    HeaderComponent,
    ActorViewComponent,
    MovieReviewComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Actor 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
