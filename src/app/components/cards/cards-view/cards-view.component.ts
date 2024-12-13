import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';
import { Card, CardFilters } from '../../../domain/models/card.model';
import { FilterCardsUseCase } from '../../../domain/use-cases/filter-cards.use-case';
import { CardModalComponent } from '../card-modal/card-modal.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-view',
  imports: [CardComponent, CardModalComponent],
  templateUrl: './cards-view.component.html',
})
export class CardsViewComponent {
  private filterUseCase = inject(FilterCardsUseCase);
  private filterService = inject(FilterService);
  selectedCard: Card | null = null;

  filteredCards: Card[] = [];

  async ngOnInit(): Promise<void> {
    this.filterService.filters$.subscribe(async (filters: CardFilters) => {
      this.filteredCards = await this.filterUseCase.execute(filters);
    });
  }

  openModal(card: Card, dialog: CardModalComponent) {
    this.selectedCard = card;
    dialog.openModal();
  }
}
