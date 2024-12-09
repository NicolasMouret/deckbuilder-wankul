import { Component, output } from '@angular/core';
import { UiUtils } from '../../../../application/utils/ui-utils';
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
    this.selectedOptions = UiUtils.updateSelectedOptions<Strength>(
      event,
      this.selectedOptions
    );
    this.selectedOptionsOutput.emit(this.selectedOptions);
  }
}
