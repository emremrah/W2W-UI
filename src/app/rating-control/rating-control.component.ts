import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-control',
  templateUrl: './rating-control.component.html',
  styleUrl: './rating-control.component.css',
})
export class RatingControlComponent {
  @Input() minRating = 0;
}
