import {Component, Input, OnInit} from "@angular/core";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {FilmsComponent} from "../../components/films/films.component";
import {IFilm} from "../../models/filmint";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class FilmModalComponent implements OnInit {

  @Input() title: string
  constructor(public modalService: FilmModalService) { }

  ngOnInit(): void {
  }

}
