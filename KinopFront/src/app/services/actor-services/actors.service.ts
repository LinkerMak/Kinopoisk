import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, tap, throwError} from "rxjs";
import {IActor} from "../../models/actorint";
import {IFilm} from "../../models/filmint";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  products: IActor[] = []

  films: IFilm[] = []
  constructor(private http: HttpClient) {
  }

  getAll():Observable<IActor[]> {
    return this.http.get<IActor[]>('http://localhost:8080/actors/all').pipe(delay(200),
      tap(products => this.products = products),catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }

  create(actor: IActor): Observable<IActor> {
    return this.http.post<IActor>('http://localhost:8080/actors', actor)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

  showFilmsByActor(id: number | undefined): Observable<IFilm[]> {
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.get<IFilm[]>('http://localhost:8080/films',{params})
      .pipe(
        tap(films =>this.films = films)
      )
  }

  deleteActor(id: number | undefined): Observable<IActor>{
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.delete<IActor>("http://localhost:8080/actors",{params})
      .pipe(
        tap(film => this.products.filter(x => {
          return x.id != id;
        }))
      )

  }
}
