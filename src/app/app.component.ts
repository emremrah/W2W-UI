import { Component, ViewChild } from '@angular/core';

import { CheckboxBoxComponent } from './checkbox-box/checkbox-box.component';
import { Movie } from './movie-list/movie/movie.model';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(CheckboxBoxComponent) checkboxBoxComponent: CheckboxBoxComponent;
  @ViewChild(MovieListComponent) movieListComponent: MovieListComponent;
  minRating = 0;
  selectedGenres: string[];

  onSliderChange(event: any) {
    this.minRating = event;
  }

  async getResults() {
    this.selectedGenres = this.checkboxBoxComponent.checkedGenres;

    const response: Movie[] = await fetch('http://127.0.0.1:41000/pop100', {
      method: 'POST',
      body: JSON.stringify({
        genres: this.selectedGenres,
        min_rating: this.minRating,
        search_in: 3,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch(() => console.log('Filmleri getirirken hata oluştu.'));

    this.movieListComponent.movies = response;
  }
}
