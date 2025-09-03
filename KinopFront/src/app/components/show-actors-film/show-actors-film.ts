import {Component, Input} from "@angular/core";
import {IFilm} from "../../models/filmint";
import {IActor} from "../../models/actorint";
import {FilmsService} from "../../services/films-services/films.service";

@Component({
  selector: 'app-film-show',
  templateUrl: './show-actors-film.html'
})
export class ShowActorsFilm{

  @Input() actor!: IActor

}
