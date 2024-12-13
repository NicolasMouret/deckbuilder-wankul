import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';
import { CardFilters } from '../../../domain/models/card.model';

@Component({
  selector: 'app-ban-filter',
  imports: [NgClass],
  templateUrl: './ban-filter.component.html',
})
export class BanFilterComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;
  isToggleChecked = false;
  isCheckboxChecked = false;

  onToggleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isToggleChecked = target.checked;

    if (!this.isToggleChecked) {
      this.isCheckboxChecked = false;
      this.filterService.updateFilters({ is_ban: false });
    } else {
      this.filterService.updateFilters({ is_ban: undefined });
    }
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isCheckboxChecked = target.checked;

    if (this.isCheckboxChecked) {
      this.filterService.updateFilters({ is_ban: true });
    } else {
      this.filterService.updateFilters({ is_ban: undefined });
    }
  }
}
