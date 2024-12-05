import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  imports: [],
  templateUrl: './dropdown-checkbox.component.html',
})
export class DropdownCheckboxComponent {
  dropdownName = input.required<string>();
  options = input.required<string[] | number[]>();
  eventOutput = output<Event>();
  onChange(event: Event): void {
    this.eventOutput.emit(event);
  }
}
