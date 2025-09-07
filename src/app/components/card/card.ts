import { Component, input } from '@angular/core';
import { ResponsePostObject } from '../../models/last-10-posts';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  post = input.required<ResponsePostObject>();
}
