import { Component, output } from '@angular/core';
import { UiUtils } from '../../../../application/utils/ui-utils';
import { Cost, costOptions } from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

@Component({
  selector: 'app-cost-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './cost-filter.component.html',
  styles: ``,
})
export class CostFilterComponent {
  protected dropdownName = 'Coût';
  protected options: Cost[] = costOptions;
  selectedOptions: Cost[] = [];
  selectedOptionsOutput = output<Cost[]>();

  onEventOutput(event: Event): void {
    this.selectedOptions = UiUtils.updateSelectedOptions(
      event,
      this.selectedOptions
    );
    this.selectedOptionsOutput.emit(this.selectedOptions);
  }
}
