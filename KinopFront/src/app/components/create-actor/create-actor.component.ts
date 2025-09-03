import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActorsService} from "../../services/actor-services/actors.service";
import {ActorModalService} from "../../services/actor-services/actor-modal.service";

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(
    private actorService: ActorsService,
    private modalService: ActorModalService
  ) {
  }


  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    biography: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    birthdate: new FormControl<string>('', [
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

  get biography() {
    return this.form.controls.biography as FormControl
  }

  get birthdate() {
    return this.form.controls.birthdate as FormControl
  }

  get image() {
    return this.form.controls.image as FormControl
  }
  ngOnInit(): void {
  }

  submit() {
    this.actorService.create({
      name: this.form.value.name as string,
      biography: this.form.value.biography as string,
      birthdate: this.form.value.birthdate as string,
      image: this.form.value.image as string
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
