import { Component, Input, OnInit } from '@angular/core';
import { Genre } from '../models/genre.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-checkbox-box',
  templateUrl: './checkbox-box.component.html',
  styleUrls: ['./checkbox-box.component.css'],
})
export class CheckboxBoxComponent implements OnInit {
  genres: Array<Genre> = [];

  constructor(private movieService: MovieService) {}

  onGenreSelect(event: MatCheckboxChange, i: number) {
    this.genres[i].selected = event.checked;
  }
  getSelectedGenres() {
    return this.genres.filter((genre) => genre.selected);
  }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((genres: string[]) => {
      this.genres = genres.map((genre) => ({
        name: genre,
        selected: false,
      }));
    });
  }
}
