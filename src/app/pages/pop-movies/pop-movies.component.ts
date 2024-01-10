import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AiControlComponent } from 'src/app/ai-control/ai-control.component';
import { GenreSelectorComponent } from 'src/app/genre-selector/genre-selector.component';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/movie-list/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { MockMovieService } from 'src/app/mocks/mock-movie.service';

@Component({
  selector: 'app-pop-movies',
  templateUrl: './pop-movies.component.html',
  styleUrl: './pop-movies.component.css',
})
export class PopMoviesComponent implements OnInit {
  @ViewChild(AiControlComponent) aiControlComponent: AiControlComponent;
  @ViewChild(GenreSelectorComponent) genreSelector: GenreSelectorComponent;

  minRating = 0;
  movies: Array<Movie> = [];
  genres: Array<Genre> = [];

  loadingResults = false;

  constructor(
    private snackBar: MatSnackBar,
    private movieService: MovieService,
    private mockMovieService: MockMovieService
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

  async getResults() {
    // Reset the movie list
    this.movies = [];
    this.loadingResults = true;

    this.mockMovieService
      .getMovies(
        this.genreSelector.selectedGenres.map((genre) => genre.name),
        this.minRating,
        this.aiControlComponent.aiEnabled.value,
        this.aiControlComponent.userPrompt.value || null
      )
      .subscribe(
        (response) => {
          this.movies = response;
        },
        (error) => {
          this.snackBar.open('Hata oluştu', 'Kapat', {
            duration: 2000,
          });
        },
        () => {
          this.loadingResults = false;
        }
      );
  }
}
