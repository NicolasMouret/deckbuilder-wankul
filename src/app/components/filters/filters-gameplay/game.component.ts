import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';
import {
  CardFilters,
  Cost,
  EffectsContentNamesType,
  Strength,
} from '../../../domain/models/card.model';
import { CostFilterComponent } from './cost-filter/cost-filter.component';
import { EffectsFilterComponent } from './effects-filter/effects-filter.component';
import { StrengthFilterComponent } from './strength-filter/strength-filter.component';

@Component({
  selector: 'app-gameplay-view',
  imports: [
    EffectsFilterComponent,
    StrengthFilterComponent,
    CostFilterComponent,
  ],
  templateUrl: './game.component.html',
  styles: ``,
})
export class GameplayViewComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;

  onCostChange(costValue: Cost[]): void {
    this.filters.cost = costValue;
    this.filterService.updateFilters(this.filters);
  }

  onStrengthChange(strengthValue: Strength[]): void {
    this.filters.strength = strengthValue;
    this.filterService.updateFilters(this.filters);
  }

  onEffectsChange(effectsValue: EffectsContentNamesType[]): void {
    this.filters.effects = effectsValue;
    this.filterService.updateFilters(this.filters);
  }
}
