import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/app.HomeComponent';
import { AddComponent } from './Add/app.AddComponent';
import { ListComponent } from './List/app.ListComponent';
import { ViewComponent } from './View/app.ViewComponent';
import { DetailComponent } from './Detail/app.DetailComponent';


const routes: Routes = [
  {path : 'Home', component : HomeComponent},
  {path : 'Add', component : AddComponent},
  {path : 'List', component : ListComponent},
  {path : 'View', component : ViewComponent},
  {path : 'Detail', component : DetailComponent},

  {path : '', component : HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
