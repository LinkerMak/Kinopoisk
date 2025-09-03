import {Component, Input, OnInit} from "@angular/core";
import {FilmsService} from "../../services/films-services/films.service";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IFilm} from "../../models/filmint";
import {subscribeOn} from "rxjs";
import {FilmsComponent} from "../films/films.component";

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {

  @Input() film!: IFilm

  constructor(
    private filmService: FilmsService,
    private filmsComponent: FilmsComponent
  ) {
  }


  form = new FormGroup({
    name: new FormControl<string>(this.filmsComponent.film.name, [
      Validators.required,
      Validators.minLength(2)
    ]),
    description: new FormControl<string>(this.filmsComponent.film.description, [
      Validators.required,
      Validators.minLength(1)
    ]),
    genre: new FormControl<string>(this.filmsComponent.film.genre, [
      Validators.required,
      Validators.minLength(1)
    ]),
    price: new FormControl<number>(this.filmsComponent.film.price, [
      Validators.required,
      Validators.minLength(1)
    ]),
    rating: new FormControl<number>(this.filmsComponent.film.rating, [
      Validators.required,
      Validators.minLength(1)
    ]),
    video: new FormControl<string>(this.filmsComponent.film.video, [
      Validators.required,
      Validators.minLength(1)
    ]),
    image: new FormControl<string>(this.filmsComponent.film.image, [
      Validators.required,
      Validators.minLength(1)
    ])

  })

  get name() {
    return this.form.controls.name as FormControl
  }

  get description() {
    return this.form.controls.description as FormControl
  }

  get genre() {
    return this.form.controls.genre as FormControl
  }

  get video() {
    return this.form.controls.video as FormControl
  }

  get image() {
    return this.form.controls.image as FormControl
  }

  get price() {
    return this.form.controls.price as FormControl
  }

  get rating() {
    return this.form.controls.rating as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    this.filmService.update({
      id: this.filmsComponent.film.id,
      name: this.form.value.name as string,
      price: this.form.value.price as number,
      description: this.form.value.description as string,
      genre: this.form.value.genre as string,
      video: this.form.value.video as string,
      image: this.form.value.image as string,
      rating: this.form.value.rating as number,
      dateRelease: "18.11.2002"
    }).subscribe(obj => this.filmsComponent.details3=!this.filmsComponent.details3
    )
  }
}
