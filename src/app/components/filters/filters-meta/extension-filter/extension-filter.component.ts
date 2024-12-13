import { Component, output } from '@angular/core';
import {
  Extension,
  extensionOptions,
} from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';
import { UiUtils } from '../../../../application/utils/ui-utils';

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
    this.selectedOptions = UiUtils.updateSelectedOptions(
      event,
      this.selectedOptions
    );
    this.selectedOptionsOutput.emit(this.selectedOptions);
  }
}
