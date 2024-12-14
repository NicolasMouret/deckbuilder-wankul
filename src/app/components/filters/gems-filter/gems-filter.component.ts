import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';
import {
  CardFilters,
  GemsContentNamesType,
} from '../../../domain/models/card.model';
import { CloseFilterComponent } from './close-filter/close-filter.component';
import { OpenFilterComponent } from './open-filter/open-filter.component';

@Component({
  selector: 'app-gems-filter',
  imports: [OpenFilterComponent, CloseFilterComponent],
  templateUrl: './gems-filter.component.html',
})
export class GemsFilterComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;

  onOpenChange(openValue: GemsContentNamesType[]): void {
    console.log('Final value', openValue);
    this.filters.gem_open = openValue;
    this.filterService.updateFilters(this.filters);
  }

  onCloseChange(closeValue: GemsContentNamesType[]): void {
    this.filters.gem_close = closeValue;
    this.filterService.updateFilters(this.filters);
  }
}
