import {Component, Input} from "@angular/core";
import {IActor} from "../../models/actorint";
import {FilmsService} from "../../services/films-services/films.service";

@Component({
  selector: 'app-add-actor',
  templateUrl: './show-actors-for-add.html'
})
export class ShowActorsForAdd{

  @Input() actor!: IActor

  @Input() idFilm: number | undefined

  constructor(private filmService: FilmsService) {
  }
  details = false
  addActor(): void {
    if(!this.details) {
      this.filmService.addActorForFilm(this.idFilm,this.actor).subscribe()
      this.details = !this.details
    }
  }
}
