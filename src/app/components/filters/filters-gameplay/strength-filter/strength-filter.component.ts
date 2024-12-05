import { Component, output } from '@angular/core';
import {
  Strength,
  strengthOptions,
} from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

@Component({
  selector: 'app-strength-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './strength-filter.component.html',
  styles: ``,
})
export class StrengthFilterComponent {
  protected dropdownName = 'Force';
  protected options: Strength[] = strengthOptions;
  selectedOptions: Strength[] = [];
  selectedOptionsOutput = output<Strength[]>();

  onEventOutput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value) as Strength;
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
