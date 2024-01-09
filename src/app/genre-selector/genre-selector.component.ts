import { Component, Input } from '@angular/core';
import { Genre } from '../models/genre.model';

@Component({
  selector: 'app-genre-selector',
  templateUrl: './genre-selector.component.html',
  styleUrl: './genre-selector.component.css',
})
export class GenreSelectorComponent {
  @Input() genres: Array<Genre> = [];
  selectedGenres: Array<Genre> = [];

  constructor() {}

  ngOnInit(): void {}
}
