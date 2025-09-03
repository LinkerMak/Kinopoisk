import {Component, Input, OnInit} from "@angular/core";
import {FilmsService} from "../../services/films-services/films.service";
import {FilmModalService} from "../../services/films-services/modal.servic";
import {IFilm} from "../../models/filmint";
import {FilmsComponent} from "../../components/films/films.component";

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrl: './films-page.component.css'
})
export class FilmsPageComponent implements OnInit {

  @Input() film: IFilm
  title = 'Kinopoisk Films'
  term:string = ''
  loading = false

  flag: boolean = false
  constructor(public filmsService: FilmsService,public modalService: FilmModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))
    this.filmsService.getAll().subscribe(products => {
      this.loading = false
    })
  }

  protected readonly console = console;
}
