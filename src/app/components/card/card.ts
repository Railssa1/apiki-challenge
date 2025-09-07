import { Component, input, output } from '@angular/core';
import { ResponsePostObject } from '../../models/last-10-posts';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  slug = output<string>();
  post = input.required<ResponsePostObject>();
}
