import { Component, inject } from '@angular/core';
import { FilterService } from '../../../application/services/filter.service';
import {
  CardFilters,
  Clan,
  Extension,
  Rarity,
} from '../../../domain/models/card.model';
import { ClanFilterComponent } from './clan-filter/clan-filter.component';
import { ExtensionFilterComponent } from './extension-filter/extension-filter.component';
import { RarityFilterComponent } from './rarity-filter/rarity-filter.component';

@Component({
  selector: 'app-meta-view',
  imports: [
    ExtensionFilterComponent,
    RarityFilterComponent,
    ClanFilterComponent,
  ],
  templateUrl: './meta-view.component.html',
  styles: ``,
})
export class MetaViewComponent {
  private filterService = inject(FilterService);
  private filters: CardFilters = this.filterService.initialFilters;

  onExtensionChange(extensionValue: Extension[]): void {
    this.filters.extension = extensionValue;
    this.filterService.updateFilters(this.filters);
  }

  onRarityChange(rarityValue: Rarity[]): void {
    this.filters.rarity = rarityValue;
    this.filterService.updateFilters(this.filters);
  }

  onClanChange(clanValue: Clan[]): void {
    this.filters.clan = clanValue;
    this.filterService.updateFilters(this.filters);
  }
}
