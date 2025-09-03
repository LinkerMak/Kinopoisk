
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmsPageComponent} from "./pages/films-page/films-page.component";
import {ActorPageComponent} from "./pages/actors-page/actors-page.component";

const routes: Routes = [
  {path :'',component: FilmsPageComponent},
  {path:'actors', component: ActorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
