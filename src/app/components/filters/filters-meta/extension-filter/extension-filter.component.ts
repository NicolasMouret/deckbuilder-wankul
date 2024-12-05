import { Component, output } from '@angular/core';
import {
  Extension,
  extensionOptions,
} from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

@Component({
  selector: 'app-extension-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './extension-filter.component.html',
})
export class ExtensionFilterComponent {
  protected dropdownName = 'Extensions';
  protected options: Extension[] = extensionOptions;
  selectedOptions: Extension[] = [];
  selectedOptionsOutput = output<Extension[]>();

  onEventOutput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value as Extension;
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
