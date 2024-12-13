import { Injectable, InputSignal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private dropdownState = new Subject<InputSignal<string>>();

  dropdownState$ = this.dropdownState.asObservable();

  openDropdown(dropdownId: InputSignal<string>): void {
    this.dropdownState.next(dropdownId);
  }
}
