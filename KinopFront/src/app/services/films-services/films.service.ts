import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, tap, throwError} from "rxjs";
import {IFilm} from "../../models/filmint";
import {IActor} from "../../models/actorint";
import {comment} from "postcss";
import {INews} from "../../models/newsint";
import {IReview} from "../../models/reviewint";
import {IGrade} from "../../models/gradeint";
import {ActorsService} from "../actor-services/actors.service";
import {FilmsComponent} from "../../components/films/films.component";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  products: IFilm[] = []

  actors: IActor[] = []

  news: INews[] = []

  reviews: IReview[] = []

  grade: IGrade

  flag:boolean

  noAllActors: IActor[] = []

  getIncludeNoAll(actor:IActor) :boolean {
    this.flag = false
    this.noAllActors.map( (act) => { if(act.id === actor.id) this.flag = true })
    return this.flag
  }
  constructor(private http: HttpClient) {
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }


  private getInclude(actor:IActor) :boolean {
    this.flag = false
    this.actors.map( (act) => { if(act.id === actor.id) this.flag = true })
    return this.flag
  }
  getGrade(id: number | undefined):Observable<IGrade> {
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.get<IGrade>('http://localhost:8080/reviews',{params}).pipe(delay(200),
      tap(grade => {this.grade = grade
      }),catchError(this.errorHandler))
  }
  getAll():Observable<IFilm[]> {
    return this.http.get<IFilm[]>('http://localhost:8080/films/all').pipe(delay(200),
      tap(products => {this.products = products}),catchError(this.errorHandler))
  }

  create(film: IFilm): Observable<IFilm> {
    return this.http.post<IFilm>('http://localhost:8080/films', film)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

  createNews(news: INews, idFilm: number | undefined):Observable<INews[]> {
    // @ts-ignore
    const params = new HttpParams().set("id",idFilm.toString())
    return this.http.put<INews[]>('http://localhost:8080/news',news,{params}).pipe(delay(200),
      tap(film => this.news.push(news)))
  }

  createReview(review: IReview, idFilm: number | undefined):Observable<IReview[]> {
    // @ts-ignore
    const params = new HttpParams().set("id",idFilm.toString())
    return this.http.put<IReview[]>('http://localhost:8080/reviews',review,{params}).pipe(delay(200),
      tap( rev=> this.reviews.push(review)))
  }

  update(film: IFilm): Observable<IFilm> {
    return this.http.post<IFilm>('http://localhost:8080/films',film)
      .pipe(
        tap(prod => this.products.map(obj => {
          if(prod.id === obj.id) {
            obj.name = prod.name
            obj.description = prod.description
            obj.genre = prod.genre
            obj.image = prod.image
            obj.price = prod.price
            obj.rating = prod.rating
            obj.video = prod.video
            obj.dateRelease = prod.dateRelease
          }
        }))
      )
  }

  showNoAllActors(): Observable<IActor[]> {
    // @ts-ignore
    return this.http.get<IActor[]>('http://localhost:8080/actors/all').pipe(delay(200),
      tap(allActors => {
        let tempActors:IActor[] = []
        allActors.map( (actor) => {
          if(!this.getInclude(actor) && !this.getIncludeNoAll(actor)) {
            this.flag = false
            tempActors.push(actor)}
        })
        this.noAllActors = tempActors
      }),catchError(this.errorHandler))
  }

  addActorForFilm(id:number | undefined, actor:IActor):Observable<IActor[]> {
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.put<IActor[]>('http://localhost:8080/films',actor,{params}).pipe(
      tap(acto => { this.noAllActors.filter(x => {
        return x.id != actor.id
      })
      this.actors.push(actor)
      } ))
  }


  showActorsByFilm(id: number | undefined): Observable<IActor[]> {
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.get<IActor[]>('http://localhost:8080/actors',{params})
      .pipe(
        tap(actors =>this.actors=actors)
      )
  }

  showNewsByFilm(id: number | undefined): Observable<INews[]> {
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.get<INews[]>('http://localhost:8080/news',{params})
      .pipe(
        tap(news => this.news=news)
      )
  }

  deleteFilm(id: number | undefined): Observable<IFilm>{
    // @ts-ignore
    const params = new HttpParams().set("id",id.toString())
    return this.http.delete<IFilm>("http://localhost:8080/films",{params})
      .pipe(
        tap(film => this.products.filter(x => {
          return x.id != id;
        }))
      )

  }
}
