import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Genre } from '../models/genre.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-checkbox-box',
  templateUrl: './checkbox-box.component.html',
  styleUrls: ['./checkbox-box.component.css'],
})
export class CheckboxBoxComponent implements OnInit {
  allGenres: string[] = [];
  selectedGenres: Array<Genre> = [];
  checkedGenres: string[];

  constructor(private movieService: MovieService) {}

  onGenreSelect(event: MatCheckboxChange, i: number) {
    this.selectedGenres[i].selected = event.checked;
    this.checkedGenres = this.selectedGenres
      .filter((genre) => genre.selected)
      .map((genre) => genre.name);
  }

  trackGenre(index: number, genre: Genre) {
    return genre.name;
  }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((genres: string[]) => {
      this.allGenres = genres;
      this.selectedGenres = this.allGenres.map((genre) => ({
        name: genre,
        selected: false,
      }));
    });
  }
}
