import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-filter',
  imports: [FormsModule],
  templateUrl: './name-filter.component.html',
})
export class NameFilterComponent {
  searchContent = '';
  searchOutput = output<string>();

  onSearchContentChange(): void {
    this.searchOutput.emit(this.searchContent);
    console.log('Emitted search content', this.searchContent);
  }
}
