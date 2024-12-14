import { Component, output } from '@angular/core';
import { UiUtils } from '../../../../application/utils/ui-utils';
import { GemsContentNamesType } from '../../../../domain/models/card.model';

@Component({
  selector: 'app-open-filter',
  imports: [],
  templateUrl: './open-filter.component.html',
})
export class OpenFilterComponent {
  openSelectedGems: GemsContentNamesType[] = [];
  openSelectedGemsOutput = output<GemsContentNamesType[]>();

  onOpenChange(event: Event): void {
    this.openSelectedGems = UiUtils.updateSelectedOptions(
      event,
      this.openSelectedGems
    );
    this.openSelectedGemsOutput.emit(this.openSelectedGems);
  }
}
