import { Component, output } from '@angular/core';
import { UiUtils } from '../../../../application/utils/ui-utils';
import { Clan, clanOptions } from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

@Component({
  selector: 'app-clan-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './clan-filter.component.html',
})
export class ClanFilterComponent {
  protected dropdownName = 'Clans';
  protected options: Clan[] = clanOptions;
  selectedOptions: Clan[] = [];
  selectedOptionsOutput = output<Clan[]>();

  onEventOutput(event: Event): void {
    this.selectedOptions = UiUtils.updateSelectedOptions(
      event,
      this.selectedOptions
    );
    console.log('Selected clans:', this.selectedOptions);
    this.selectedOptionsOutput.emit(this.selectedOptions);
  }
}
