import { Component } from '@angular/core';
import { CardsViewComponent } from '../../components/cards/cards-view/cards-view.component';
import { FiltersViewComponent } from '../../components/filters/filters-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsViewComponent, FiltersViewComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
