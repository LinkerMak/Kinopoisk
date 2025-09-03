import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {IFilm} from "../../models/filmint";
import {IActor} from "../../models/actorint";
import {FilmsService} from "../../services/films-services/films.service";
import {ActorsService} from "../../services/actor-services/actors.service";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html'
})
export class ActorComponent implements OnInit{

  @Input() actor!: IActor

  constructor(
    public actorService: ActorsService,
  ) {
  }

  ngOnInit(): void {

    }

  details = false

  details2 = false

  details3 =  true
  showFilms(id: number | undefined): void {
    this.details2 = !this.details2
    this.actorService.showFilmsByActor(id).subscribe(() => {
      console.log("request for films by actor")
    })
  }

  deleteActor(id: number | undefined) {
    if(this.details3) this.actorService.deleteActor(id).subscribe(obj => this.details3=false)
  }

}
