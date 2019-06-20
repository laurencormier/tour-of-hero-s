import { Injectable } from '@angular/core';
import { Hero } from './Hero.class';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of, VirtualTimeScheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesURL).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: Fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
  private log(message: string) {
    this.messageService.add('HeroService: ${message}');
  }

  private heroesURL = 'api/heroes';

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesURL, hero, httpOptions).pipe(
      tap(_ => this.log('updated hero id=${hero.id}')),
      catchError(this.handleError<any>('updateHero')),
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesURL, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log('added hero w/ id=${newHero.id}')),
      catchError(this.handleError<Hero>('addHero'))
    )
  }
  

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}