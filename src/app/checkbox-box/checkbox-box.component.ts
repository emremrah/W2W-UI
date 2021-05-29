import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Genre } from '../models/genre.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-box',
  templateUrl: './checkbox-box.component.html',
  styleUrls: ['./checkbox-box.component.css'],
})
export class CheckboxBoxComponent implements OnInit {
  genresData = [
    { id: 1, name: 'horror' },
    { id: 2, name: 'action' },
    { id: 3, name: 'comedy' },
  ];
  genres: Array<Genre> = [];
  checkedGenres: string[];

  constructor() {
    this.genresData.map((genre) => {
      this.genres.push(new Genre(genre.name, false));
    });
  }

  onGenreSelect(event: MatCheckboxChange, i: number) {
    this.genres[i].selected = event.checked;
    this.checkedGenres = this.genres
      .filter((genre) => genre.selected)
      .map((genre) => genre.name);
  }

  ngOnInit(): void {}
}
