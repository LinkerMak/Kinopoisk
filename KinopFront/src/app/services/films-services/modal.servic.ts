import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FilmModalService {

  isVisibleDetails$ = new BehaviorSubject<boolean>(false)

  isVisibleUpdate$ = new BehaviorSubject<boolean>(false)

  openShowDetails() {
    this.isVisibleDetails$.next(true)
  }

  openShowUpdate() {
    this.isVisibleDetails$.next(true)
  }
  closeShowDetails() {
    this.isVisibleDetails$.next(false)
  }
}
