import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/app.HomeComponent';
import { AddComponent } from './Add/app.AddComponent';
import { ListComponent } from './List/app.ListComponent';
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
