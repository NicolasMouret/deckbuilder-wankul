import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';

@Component({
  selector: 'app-collection-filter',
  imports: [],
  templateUrl: './collection-filter.component.html',
})
export class CollectionFilterComponent {
  private filterService = inject(FilterService);
  isSwitchOn = false;

  onSwitchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isSwitchOn = target.checked;

    if (this.isSwitchOn) {
      this.filterService.updateFilters({ is_in_collection: true });
    } else {
      this.filterService.updateFilters({ is_in_collection: false });
    }
  }
}
