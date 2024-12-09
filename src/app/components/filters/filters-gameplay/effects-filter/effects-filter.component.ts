import { Component, output } from '@angular/core';
import { UiUtils } from '../../../../application/utils/ui-utils';
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
    this.selectedOptions = UiUtils.updateSelectedOptions(
      event,
      this.selectedOptions
    );
    this.selectedOptionsOutput.emit(this.selectedOptions);
  }
}
