import {Component, Input, OnInit} from "@angular/core";
import {IFilm} from "../../models/filmint";
import {FilmsService} from "../../services/films-services/films.service";
import {FilmsComponent} from "../films/films.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {INews} from "../../models/newsint";

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  @Input() news!: INews
  constructor(
    private filmService: FilmsService,
    private filmsComponent: FilmsComponent
  ) {
  }


  form = new FormGroup({
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ])
  })

  get description() {
    return this.form.controls.description as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    this.filmService.createNews({
      description: this.form.value.description as string,
    },this.filmsComponent.film.id).subscribe(obj => this.filmsComponent.details4=!this.filmsComponent.details4
    )
  }
}
