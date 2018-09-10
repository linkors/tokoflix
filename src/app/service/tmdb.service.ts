import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Response } from '@app/model/response';
import { Movie } from '@app/model/movie';
import { Configuration } from '@app/model/configuration';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'e8053ddeaf8901bf3c21a7879f17b55f'; 

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNowPlaying (page: number): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + `/movie/now_playing?api_key=${this.apiKey}&language=id&page=${page}`)
    .pipe(
      tap(response => console.log(`Get now playing movie`)),
      catchError(this.handleError<Response>('getNowPlaying'))
    );
  }

  getRecommendation (movieId:number, page:number): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + `/movie/${movieId}/recommendations?api_key=${this.apiKey}&language=id&page=${page}`)
    .pipe(
      tap(response => console.log(`Get movie recommendation`)),
      catchError(this.handleError<Response>('getRecommendation'))
    );
  }

  getSimilarMovie (movieId:number, page:number): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + `/movie/${movieId}/similar?api_key=${this.apiKey}&language=id&page=${page}`)
    .pipe(
      tap(response => console.log(`Get similar movie`)),
      catchError(this.handleError<Response>('getSimilarMovie'))
    );
  }

  getMovieDetail (movieId:number): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + `/movie/${movieId}?api_key=${this.apiKey}&language=id&append_to_response=videos`)
    .pipe(
      tap(response => console.log(`Get now playing movie`)),
      catchError(this.handleError<Movie>('getNowPlaying'))
    );
  }

  getConfiguration (): Observable<Configuration> {
    return this.http.get<Configuration>(this.baseUrl + `/configuration?api_key=${this.apiKey}`)
    .pipe(
      tap(response => console.log(`Get configuration`)),
      catchError(this.handleError<Configuration>('getConfiguration'))
    );
  }

}
