import { Component, inject } from '@angular/core';
import { CardFilters } from '../../../domain/models/card.model';
import { MetaViewComponent } from '../filters-meta/meta-view.component';
import { NameFilterComponent } from '../name-filter/name-filter.component';
import { FilterService } from './../../../application/services/filter.service';

@Component({
  selector: 'app-filters-view',
  imports: [NameFilterComponent, MetaViewComponent],
  templateUrl: './filters-view.component.html',
})
export class FiltersViewComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;

  onNameSearchChange(nameValue: string): void {
    this.filters.name = nameValue;
    this.filterService.updateFilters(this.filters);
  }
}
