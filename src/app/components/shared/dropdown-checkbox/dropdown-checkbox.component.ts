import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownService } from '../../../application/services/dropdown.service';
import { UiUtils } from '../../../application/utils/ui-utils';

@Component({
  selector: 'app-dropdown-checkbox',
  imports: [NgClass],
  templateUrl: './dropdown-checkbox.component.html',
})
export class DropdownCheckboxComponent {
  protected isDropdownOpen = false;
  isAlignEnd = input<boolean>(false);
  dropdownName = input.required<string>();
  options = input.required<string[] | number[]>();
  selectedOptions: (string | number)[] = [];
  eventOutput = output<Event>();
  private dropdownId = this.dropdownName;
  private subscription!: Subscription;

  constructor(private dropdownService: DropdownService) {}

  ngOnInit(): void {
    this.subscription = this.dropdownService.dropdownState$.subscribe(
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
    this.subscription.unsubscribe();
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
