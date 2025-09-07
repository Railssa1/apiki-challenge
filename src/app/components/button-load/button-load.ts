import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button-load',
  imports: [],
  templateUrl: './button-load.html',
  styleUrl: './button-load.css'
})
export class ButtonLoad {
  loadMore = output<void>();

  onLoadMore(): void {
    this.loadMore.emit();
  }
}
