import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardFilters } from '../../domain/models/card.model';
import { FilterService } from './../../application/services/filter.service';
import { BanFilterComponent } from './ban-filter/ban-filter.component';
import { GameplayViewComponent } from './filters-gameplay/game.component';
import { MetaViewComponent } from './filters-meta/meta-view.component';
import { NameFilterComponent } from './name-filter/name-filter.component';

@Component({
  selector: 'app-filters-view',
  imports: [
    NameFilterComponent,
    MetaViewComponent,
    GameplayViewComponent,
    BanFilterComponent,
  ],
  templateUrl: './filters-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersViewComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;

  onNameSearchChange(nameValue: string): void {
    this.filters.name = nameValue;
    this.filterService.updateFilters(this.filters);
  }
}
