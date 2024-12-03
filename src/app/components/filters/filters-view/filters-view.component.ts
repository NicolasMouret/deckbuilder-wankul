import { Component, inject } from '@angular/core';
import { CardFilters } from '../../../domain/models/card.model';
import { NameFilterComponent } from '../name-filter/name-filter.component';
import { FilterService } from './../../../application/services/filter.service';

@Component({
  selector: 'app-filters-view',
  imports: [NameFilterComponent],
  templateUrl: './filters-view.component.html',
  styles: ``,
})
export class FiltersViewComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = {};

  onNameSearchChange(nameValue: string): void {
    this.filters.name = nameValue;
    this.filterService.updateFilters(this.filters);
    console.log('Updated filters in view', this.filters);
  }
}
