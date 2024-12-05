import { Component, output } from '@angular/core';
import { Clan, clanOptions } from '../../../../domain/models/card.model';
import { DropdownCheckboxComponent } from '../../../shared/dropdown-checkbox/dropdown-checkbox.component';

@Component({
  selector: 'app-clan-filter',
  imports: [DropdownCheckboxComponent],
  templateUrl: './clan-filter.component.html',
  styles: ``,
})
export class ClanFilterComponent {
  protected dropdownName = 'Clans';
  protected options: Clan[] = clanOptions;
  selectedOptions: Clan[] = [];
  selectedOptionsOutput = output<Clan[]>();

  onEventOutput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value as Clan;
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
