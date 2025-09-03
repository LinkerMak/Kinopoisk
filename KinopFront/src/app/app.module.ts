import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilmsComponent} from "./components/films/films.component";
import {HttpClientModule} from "@angular/common/http";
import {FilmModalComponent} from "./modal/modal-film/modal.component";
import {CreateProductComponent} from "./components/create-film/create-film.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FocusDirective} from "./components/directives/focus.directive";
import {FilterProductsPipe} from "./pipes/filter.films.pipe";
import {FilmsPageComponent} from "./pages/films-page/films-page.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {ActorPageComponent} from "./pages/actors-page/actors-page.component";
import {ActorComponent} from "./components/actors/actors.component";
import {FilterActorsPipe} from "./pipes/filter.actors.pipe";
import {CreateActorComponent} from "./components/create-actor/create-actor.component";
import {ActorModalComponent} from "./modal/modal-actor/modal-actor.component";
import {ShowActorsFilm} from "./components/show-actors-film/show-actors-film";
import {ShowFilmsActor} from "./components/show-films-actor/show-films-actor";
import {UpdateFilmComponent} from "./components/update-film/update-film.component";
import {UpdateFilmModalComponent} from "./modal/modal-update-film/update-film-modal.component";
import {CreateNewsModalComponent} from "./modal/app-create-news-modal/app-create-news-modal";
import {CreateNewsComponent} from "./components/create-news/create-news.component";
import {ShowNewsFilm} from "./components/show-news-film/show-news-film";
import {CreateReviewModalComponent} from "./modal/app-create-review-modal/app-create-review-modal";
import {CreateReviewComponent} from "./components/create-review/create-review.component";
import {ShowActorsForAdd} from "./components/show-actors-for-add/show-actors-for-add";

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CreateProductComponent,
    FocusDirective,
    FilterProductsPipe,
    FilmsPageComponent,
    NavigationComponent,
    ActorPageComponent,
    ActorComponent,
    FilterActorsPipe,
    CreateActorComponent,
    ActorModalComponent,
    FilmModalComponent,
    ShowActorsFilm,
    ShowFilmsActor,
    UpdateFilmComponent,
    UpdateFilmModalComponent,
    CreateNewsModalComponent,
    CreateNewsComponent,
    ShowNewsFilm,
    CreateReviewModalComponent,
    CreateReviewComponent,
    ShowActorsForAdd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
