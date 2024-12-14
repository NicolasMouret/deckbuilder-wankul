import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownService } from '../../../application/services/dropdown.service';
import { UiUtils } from '../../../application/utils/ui-utils';

@Component({
  selector: 'app-dropdown-checkbox',
  imports: [NgClass],
  templateUrl: './dropdown-checkbox.component.html',
})
export class DropdownCheckboxComponent {
  dropdownService = inject(DropdownService);
  protected isDropdownOpen = false;

  isAlignEnd = input<boolean>(false);
  dropdownName = input.required<string>();
  options = input.required<string[] | number[]>();

  eventOutput = output<Event>();

  selectedOptions: (string | number)[] = [];
  private dropdownId = this.dropdownName;
  private dropdownSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.dropdownSubscription = this.dropdownService.dropdownState$.subscribe(
      (dropdownId) => {
        if (dropdownId !== this.dropdownId) {
          this.isDropdownOpen = false;
        }
      }
    );
  }

  isSelected(option: string | number): boolean {
    return this.selectedOptions.includes(option);
  }

  ngOnDestroy(): void {
    this.dropdownSubscription.unsubscribe();
  }

  onChange(event: Event): void {
    this.selectedOptions = UiUtils.updateSelectedOptions(
      event,
      this.selectedOptions
    );
    this.eventOutput.emit(event);
  }

  protected toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.dropdownService.openDropdown(this.dropdownId);
    }
  }

  protected onFocusOut(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('details')) {
      this.isDropdownOpen = false;
    }
  }
}
