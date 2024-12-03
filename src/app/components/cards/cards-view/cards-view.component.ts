import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';
import { Card, CardFilters } from '../../../domain/models/card.model';
import { FilterCardsUseCase } from '../../../domain/use-cases/filter-cards.use-case';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-view',
  imports: [CardComponent],
  templateUrl: './cards-view.component.html',
})
export class CardsViewComponent {
  private filterUseCase = inject(FilterCardsUseCase);
  private filterService = inject(FilterService);

  filteredCards: Card[] = [];

  async ngOnInit(): Promise<void> {
    this.filterService.filters$.subscribe(async (filters: CardFilters) => {
      this.filteredCards = await this.filterUseCase.execute(filters);
      console.log('After filters', this.filteredCards);
    });
  }
}
