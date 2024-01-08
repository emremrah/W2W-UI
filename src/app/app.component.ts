import { Component, ViewChild } from '@angular/core';

import { CheckboxBoxComponent } from './checkbox-box/checkbox-box.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from './movie-list/movie/movie.model';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AiControlComponent } from './ai-control/ai-control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(CheckboxBoxComponent) checkboxBoxComponent: CheckboxBoxComponent;
  @ViewChild(MovieListComponent) movieListComponent: MovieListComponent;
  @ViewChild(AiControlComponent) aiControlComponent: AiControlComponent;

  minRating = 0;

  constructor(private snackBar: MatSnackBar) {}

  async getResults() {
    // Reset the movie list
    this.movieListComponent.movies = [];

    const response: Movie[] = await fetch('http://127.0.0.1:41000/pop100', {
      method: 'POST',
      body: JSON.stringify({
        genres: this.checkboxBoxComponent
          .getSelectedGenres()
          .map((genre) => genre.name),
        min_rating: this.minRating,
        use_ai: this.aiControlComponent.aiEnabled.value,
        user_prompt: this.aiControlComponent.userPrompt.value || null,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((res) => {
        this.snackBar.open('Hata oluştu', 'Kapat', {
          duration: 2000,
        });
      });

    this.movieListComponent.movies = response;
  }
}
