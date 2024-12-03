import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
})
export class CardComponent {
  illustrationUrl = input.required<string>();
}
