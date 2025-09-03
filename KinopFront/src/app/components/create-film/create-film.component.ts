import {Component, OnInit} from "@angular/core";
import {FilmsService} from "../../services/films-services/films.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FilmModalService} from "../../services/films-services/modal.servic";

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private filmService: FilmsService,
    private modalService: FilmModalService
  ) {
  }


  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    description: new FormControl<string>('', [
        Validators.required,
      Validators.minLength(1)
      ]),
    genre: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.minLength(1)
    ]),
    rating: new FormControl<number>(0, [
      Validators.required,
      Validators.minLength(1)
    ]),
    video: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    image: new FormControl<string>('', [
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
    this.filmService.create({
      name: this.form.value.name as string,
      price: this.form.value.price as number,
      description: this.form.value.description as string,
      genre: this.form.value.genre as string,
      video: this.form.value.video as string,
      image: this.form.value.image as string,
      rating: this.form.value.rating as number,
      dateRelease: "18.11.2002"
    }).subscribe(() => {
      this.modalService.closeShowDetails()
    })
  }

}
