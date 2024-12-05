import { Component, output } from '@angular/core';
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
    const target = event.target as HTMLInputElement;
    const value = Number(target.value) as Cost;
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
