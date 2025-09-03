import {Component, Input} from "@angular/core";
import {IFilm} from "../../models/filmint";

@Component({
  selector: 'app-actors-show',
  templateUrl: './show-films-actor.html'
})
export class ShowFilmsActor{

  @Input() film!: IFilm

}
