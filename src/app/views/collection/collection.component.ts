import { Component, inject } from '@angular/core';
import { FilterService } from '../../application/services/filter.service';
import { CardsViewComponent } from '../../components/cards/cards-view/cards-view.component';
import { FiltersViewComponent } from '../../components/filters/filters-view.component';

@Component({
  selector: 'app-collection',
  imports: [CardsViewComponent, FiltersViewComponent],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {
  filterService = inject(FilterService);

  ngOnInit() {
    this.filterService.resetFilters();
  }
}
