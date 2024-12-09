import { Component, output } from '@angular/core';
import { Rarity, rarityOptions } from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';
import { UiUtils } from '../../../../application/utils/ui-utils';

@Component({
  selector: 'app-rarity-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './rarity-filter.component.html',
  styles: ``,
})
export class RarityFilterComponent {
  protected dropdownName = 'Rareté';
  protected options: Rarity[] = rarityOptions;
  selectedOptions: Rarity[] = [];
  selectedOptionsOutput = output<Rarity[]>();

  onEventOutput(event: Event): void {
    this.selectedOptions = UiUtils.updateSelectedOptions(
      event,
      this.selectedOptions
    );
    this.selectedOptionsOutput.emit(this.selectedOptions);
  }
}
