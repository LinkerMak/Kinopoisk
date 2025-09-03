import {Component, Input, OnInit} from "@angular/core";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {FilmsComponent} from "../../components/films/films.component";

@Component({
  selector: 'app-create-news-modal',
  templateUrl: './app-create-news-modal.html',
  styleUrls: ['./app-create-news-modal.css']
})
export class CreateNewsModalComponent implements OnInit {

  @Input() title: string

  constructor(public modalService: FilmModalService,public filmComponent:FilmsComponent) { }

  ngOnInit(): void {
  }

}
