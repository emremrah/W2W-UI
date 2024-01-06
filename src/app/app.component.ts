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
  selectedGenres: string[];

  constructor(private snackBar: MatSnackBar) {}

  onSliderChange(event: any) {
    this.minRating = event;
  }

  async getResults() {
    // Reset the movie list
    this.movieListComponent.movies = [];

    this.selectedGenres = this.checkboxBoxComponent.checkedGenres;

    const response: Movie[] = await fetch('http://127.0.0.1:41000/pop100', {
      method: 'POST',
      body: JSON.stringify({
        genres: this.selectedGenres,
        min_rating: this.minRating,
        use_ai: this.aiControlComponent.aiEnabled,
        user_prompt: this.aiControlComponent.userPrompt || null,
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
