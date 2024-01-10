import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:41000';
  constructor(private http: HttpClient) {}

  getGenres() {
    return this.http.get(`${this.apiUrl}/genres`);
  }

  getMovies(
    genres: string[],
    minRating: number,
    use_ai?: boolean,
    user_prompt?: string
  ): Observable<Movie[]> {
    return this.http.post<Movie[]>(`${this.apiUrl}/pop100`, {
      genres,
      min_rating: minRating,
      use_ai,
      user_prompt,
    });
  }
}
