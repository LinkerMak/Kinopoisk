import {Pipe, PipeTransform} from "@angular/core";
import {IActor} from "../models/actorint";

@Pipe({
  name: "filterActors"
})
export class FilterActorsPipe implements PipeTransform {
  // @ts-ignore
  transform(actors: IActor[], search:string): IActor[] {
    if(search.length === 0) return actors
    return actors.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }

}
