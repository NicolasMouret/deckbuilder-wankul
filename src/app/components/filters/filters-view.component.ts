import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CardFilters } from '../../domain/models/card.model';
import { FilterService } from './../../application/services/filter.service';
import { BanFilterComponent } from './ban-filter/ban-filter.component';
import { CollectionFilterComponent } from './collection-filter/collection-filter.component';
import { ErrataFilterComponent } from './errata-filter/errata-filter.component';
import { GameplayViewComponent } from './filters-gameplay/game.component';
import { MetaViewComponent } from './filters-meta/meta-view.component';
import { GemsFilterComponent } from './gems-filter/gems-filter.component';
import { NameFilterComponent } from './name-filter/name-filter.component';

@Component({
  selector: 'app-filters-view',
  imports: [
    NgClass,
    NameFilterComponent,
    MetaViewComponent,
    GameplayViewComponent,
    BanFilterComponent,
    ErrataFilterComponent,
    GemsFilterComponent,
    CollectionFilterComponent,
  ],
  templateUrl: './filters-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersViewComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;
  collectionFilter = input<boolean>(false);
  isMainOpen = false;

  onNameSearchChange(nameValue: string): void {
    this.filters.name = nameValue;
    this.filterService.updateFilters(this.filters);
  }
}
