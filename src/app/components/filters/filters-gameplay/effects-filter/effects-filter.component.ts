import { Component, output } from '@angular/core';
import {
  effectsContentNames,
  EffectsContentNamesType,
} from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

@Component({
  selector: 'app-effects-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './effects-filter.component.html',
  styles: ``,
})
export class EffectsFilterComponent {
  protected dropdownName = 'Effets';
  protected options: EffectsContentNamesType[] = effectsContentNames;
  selectedOptions: EffectsContentNamesType[] = [];
  selectedOptionsOutput = output<EffectsContentNamesType[]>();

  onEventOutput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value as EffectsContentNamesType;
    const checked = target.checked;

    if (checked) {
      this.selectedOptions.push(value);
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        (option) => option !== value
      );
    }

    this.selectedOptionsOutput.emit(this.selectedOptions);
    console.log('Emitted selected options extension', this.selectedOptions);
  }
}
