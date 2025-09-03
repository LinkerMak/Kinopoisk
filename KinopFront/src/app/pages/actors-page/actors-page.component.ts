import {Component, OnInit} from "@angular/core";
import {FilmsService} from "../../services/films-services/films.service";
import {ActorsService} from "../../services/actor-services/actors.service";
import {ActorModalService} from "../../services/actor-services/actor-modal.service";

@Component({
  selector: 'app-actor-page',
  templateUrl: './actors-page.component.html',
  styleUrl: './actors-page.component.css'
})
export class ActorPageComponent implements OnInit {

  title = 'Kinopoisk Actors'
  term:string = ''
  loading = false

  constructor(public actorService: ActorsService,public modalService: ActorModalService) {
  }

  ngOnInit(): void {
/*
    this.actorService.login("admin","admin").subscribe(obj =>console.log(4))
*/
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))
    this.actorService.getAll().subscribe(products => {
      this.loading = false
    })
  }


  protected readonly ActorModalService = ActorModalService;
}
