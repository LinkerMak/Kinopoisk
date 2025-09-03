import {Component, Input, OnInit} from "@angular/core";
import {INews} from "../../models/newsint";
import {FilmsService} from "../../services/films-services/films.service";
import {FilmsComponent} from "../films/films.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IReview} from "../../models/reviewint";

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  @Input() review: IReview
  constructor(
    private filmService: FilmsService,
    private filmsComponent: FilmsComponent
  ) {
  }


  form = new FormGroup({
    text: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    grade: new FormControl<number>(0, [
      Validators.required,
      Validators.max(10),
      Validators.min(0)
    ])
  })

  get text() {
    return this.form.controls.text as FormControl
  }

  get grade() {
    return this.form.controls.grade as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    this.filmService.createReview({
      text: this.form.value.text as string,
      grade: this.form.value.grade as number
    },this.filmsComponent.film.id).subscribe(obj => this.filmsComponent.details6=!this.filmsComponent.details6
    )
    this.filmsComponent.flag=false
  }
}
