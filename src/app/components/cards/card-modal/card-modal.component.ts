import { Component, ElementRef, input, viewChild } from '@angular/core';
import { Card } from '../../../domain/models/card.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-modal',
  imports: [NgOptimizedImage],
  templateUrl: './card-modal.component.html',
})
export class CardModalComponent {
  card = input.required<Card | null>();
  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  openModal() {
    this.dialog()?.nativeElement.showModal();
  }

  closeModal() {
    this.dialog()?.nativeElement.close();
  }
}
