import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AiControlComponent } from 'src/app/ai-control/ai-control.component';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/movie-list/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-pop-movies',
  templateUrl: './pop-movies.component.html',
  styleUrl: './pop-movies.component.css',
})
export class PopMoviesComponent implements OnInit {
  @ViewChild(AiControlComponent) aiControlComponent: AiControlComponent;

  minRating = 0;
  movies: Array<Movie> = [];
  genres: Array<Genre> = [];

  constructor(
    private snackBar: MatSnackBar,
    private movieService: MovieService
  ) {}

  async ngOnInit() {
    // Get genres
    this.movieService.getGenres().subscribe((genres: string[]) => {
      this.genres = genres.map((genre) => ({
        name: genre,
        selected: false,
      }));
    });
  }

  getSelectedGenres() {
    return this.genres.filter((genre) => genre.selected);
  }

  async getResults() {
    // Reset the movie list
    this.movies = [];

    const response: Movie[] = await fetch('http://127.0.0.1:41000/pop100', {
      method: 'POST',
      body: JSON.stringify({
        genres: this.getSelectedGenres().map((genre) => genre.name),
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

    this.movies = response;
  }
}