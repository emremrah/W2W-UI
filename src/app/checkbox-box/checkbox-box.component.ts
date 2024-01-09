import { Component, Input, OnInit } from '@angular/core';
import { Genre } from '../models/genre.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-box',
  templateUrl: './checkbox-box.component.html',
  styleUrls: ['./checkbox-box.component.css'],
})
export class CheckboxBoxComponent implements OnInit {
  @Input() genres: Array<Genre> = [];

  constructor() {}

  onGenreSelect(event: MatCheckboxChange, i: number) {}

  ngOnInit(): void {}
}
