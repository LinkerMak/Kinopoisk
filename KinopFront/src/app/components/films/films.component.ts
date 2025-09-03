import {Component, Input, OnInit} from "@angular/core";
import {IFilm} from "../../models/filmint";
import {FilmsService} from "../../services/films-services/films.service";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {ActorsService} from "../../services/actor-services/actors.service";
import {IActor} from "../../models/actorint";


@Component({
  selector: 'app-film',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit{

  @Input() film!: IFilm
  constructor(
    public filmService: FilmsService,public modalService: FilmModalService
  ) {
  }

  ngOnInit(): void {
   }

   details8 = false

  flag = false

  details7 = true

  details6 = false

  details5 = false

  details4 = false

  details3 = false

  details2 = false

  details = false



  showActorsForAdd() {
      this.filmService.showActorsByFilm(this.film.id).subscribe()
      this.filmService.showNoAllActors().subscribe()
      this.details8 = !this.details8
  }
  showActors(id: number | undefined): void {
    this.details2 = !this.details2
    this.filmService.showActorsByFilm(id).subscribe(() => {
      console.log("request for actors by film")
    })
  }

  showNews(id: number | undefined): void {
    this.details5 = !this.details5
    this.filmService.showNewsByFilm(id).subscribe(() => {
      console.log("request for news by film")
    })
  }


  showDetails(id: number | undefined): void {
    if (!this.flag) {
      this.filmService.getGrade(this.film.id)
        .subscribe(grade => {
          this.flag = true
        })
    }
    this.details = !this.details
  }

  deleteFilm(id: number | undefined) {
    if(this.details7) this.filmService.deleteFilm(id).subscribe(obj => this.details7=false)
  }
}
