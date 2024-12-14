import { Component, output } from '@angular/core';
import { UiUtils } from '../../../../application/utils/ui-utils';
import { GemsContentNamesType } from '../../../../domain/models/card.model';

@Component({
  selector: 'app-close-filter',
  imports: [],
  templateUrl: './close-filter.component.html',
})
export class CloseFilterComponent {
  closeSelectedGems: GemsContentNamesType[] = [];
  closeSelectedGemsOutput = output<GemsContentNamesType[]>();

  onCloseChange(event: Event): void {
    this.closeSelectedGems = UiUtils.updateSelectedOptions(
      event,
      this.closeSelectedGems
    );
    this.closeSelectedGemsOutput.emit(this.closeSelectedGems);
  }
}
