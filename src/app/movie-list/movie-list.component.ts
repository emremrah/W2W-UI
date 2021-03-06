import { Component, OnInit } from '@angular/core';

import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor() {}

  ngOnInit(): void {}
}
