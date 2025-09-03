import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "filterFilms"
})
export class FilterProductsPipe implements PipeTransform {
  // @ts-ignore
  transform(films: IFilm[], search:string): IFilm[] {
    if(search.length === 0) return films
    return films.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }

}
