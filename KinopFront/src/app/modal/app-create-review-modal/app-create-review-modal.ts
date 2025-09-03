import {Component, Input, OnInit} from "@angular/core";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {FilmsComponent} from "../../components/films/films.component";

@Component({
  selector: 'app-create-review-modal',
  templateUrl: './app-create-review-modal.html',
  styleUrls: ['./app-create-review-modal.css']
})
export class CreateReviewModalComponent implements OnInit {

  @Input() title: string

  constructor(public modalService: FilmModalService,public filmComponent:FilmsComponent) { }

  ngOnInit(): void {
  }

}
