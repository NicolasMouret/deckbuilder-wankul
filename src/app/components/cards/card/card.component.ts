import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  illustrationUrl = input.required<string>();
  cardName = input.required<string>();
  onClickOutput = output<void>();
  protected imgIsLoading = true;

  onClick() {
    this.onClickOutput.emit();
  }

  ngOnInit() {
    const img = new Image();
    img.src = this.illustrationUrl();
    img.onload = () => {
      this.imgIsLoading = false;
    };
  }
}
