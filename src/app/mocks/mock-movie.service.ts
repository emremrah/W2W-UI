// mock-movie.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from './movies';

@Injectable({
  providedIn: 'root',
})
export class MockMovieService {
  private mockGenres = ['Action', 'Drama', 'Comedy', 'Science Fiction'];
  private mockMovies = MOVIES;

  getGenres(): Observable<string[]> {
    return of(this.mockGenres);
  }

  getMovies(...params: any[]): Observable<any> {
    return of(this.mockMovies);
  }
}
