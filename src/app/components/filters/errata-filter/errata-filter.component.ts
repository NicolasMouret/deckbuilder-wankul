import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';

@Component({
  selector: 'app-errata-filter',
  imports: [],
  templateUrl: './errata-filter.component.html',
})
export class ErrataFilterComponent {
  private filterService = inject(FilterService);
  isCheckboxChecked = false;

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isCheckboxChecked = target.checked;

    if (this.isCheckboxChecked) {
      this.filterService.updateFilters({ errata: true });
    } else {
      this.filterService.updateFilters({ errata: false });
    }
  }
}
