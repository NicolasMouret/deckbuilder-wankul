import { Component, input, output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownService } from '../../../application/services/dropdown.service';

@Component({
  selector: 'app-dropdown-checkbox',
  imports: [],
  templateUrl: './dropdown-checkbox.component.html',
})
export class DropdownCheckboxComponent {
  protected isDropdownOpen = false;
  dropdownName = input.required<string>();
  options = input.required<string[] | number[]>();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChange(event: Event): void {
    this.eventOutput.emit(event);
  }

  protected toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.dropdownService.openDropdown(this.dropdownId);
    }
    console.log('Dropdown status', this.isDropdownOpen);
  }

  protected onFocusOut(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('details')) {
      this.isDropdownOpen = false;
    }
  }
}
