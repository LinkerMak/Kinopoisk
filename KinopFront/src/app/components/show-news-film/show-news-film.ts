import {Component, Input} from "@angular/core";
import {IActor} from "../../models/actorint";
import {INews} from "../../models/newsint";

@Component({
  selector: 'app-news-show',
  templateUrl: './show-news-film.html'
})
export class ShowNewsFilm{

  @Input() news!: INews

}
