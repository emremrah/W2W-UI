import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:41000';
  constructor(private http: HttpClient) {}

  getGenres() {
    return this.http.get(`${this.apiUrl}/genres`);
  }
}
