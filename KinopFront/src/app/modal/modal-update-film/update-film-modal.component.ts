import {Component, Input, OnInit} from "@angular/core";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {FilmsComponent} from "../../components/films/films.component";

@Component({
  selector: 'app-update-film-modal',
  templateUrl: './update-film-modal.component.html',
  styleUrls: ['./update-film-modal.component.css']
})
export class UpdateFilmModalComponent implements OnInit {

  @Input() title: string

  constructor(public modalService: FilmModalService,public filmComponent:FilmsComponent) { }

  ngOnInit(): void {
  }

}
