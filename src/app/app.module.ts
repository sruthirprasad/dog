import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoggoComponent } from './doggo/doggo.component';
import { HttpClientModule } from '@angular/common/http';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import {  SelectBreedComponent } from './select-breed/select-breed.component';

@NgModule({
  declarations: [
    AppComponent,
    DoggoComponent,
    BreedDetailComponent,
    SelectBreedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
