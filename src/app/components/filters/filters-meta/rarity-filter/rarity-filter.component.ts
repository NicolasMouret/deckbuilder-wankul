import { Component, output } from '@angular/core';
import { Rarity, rarityOptions } from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

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
    const target = event.target as HTMLInputElement;
    const value = target.value as Rarity;
    const checked = target.checked;

    if (checked) {
      this.selectedOptions.push(value);
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        (option) => option !== value
      );
    }

    this.selectedOptionsOutput.emit(this.selectedOptions);
    console.log('Emitted selected options rarity', this.selectedOptions);
  }
}
