import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ai-control',
  templateUrl: './ai-control.component.html',
  styleUrls: ['./ai-control.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300))
    ])
  ]
})
export class AiControlComponent {
  aiEnabled: boolean = false;
  userPrompt: string = '';
}
