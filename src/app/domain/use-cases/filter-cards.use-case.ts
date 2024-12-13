import { inject, Injectable } from '@angular/core';
import { CardService } from '../../application/services/card.service';
import {
  Card,
  CardFilters,
  Clan,
  Cost,
  Effects,
  EffectsContentNamesType,
  effectsMapping,
  Extension,
  Gems,
  GemsContentNamesType,
  gemsMapping,
  Rarity,
} from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class FilterCardsUseCase {
  cardService = inject(CardService);

  async execute(filters: CardFilters): Promise<Card[]> {
    const cards = await this.cardService.getAllCards();
    return cards.filter((card) => this.applyFilters(card, filters));
  }

  private applyFilters(card: Card, filters: CardFilters): boolean {
    return (
      this.matchName(card, filters.name) &&
      this.matchExtension(card, filters.extension) &&
      this.matchRarity(card, filters.rarity) &&
      this.matchClan(card, filters.clan) &&
      this.matchCost(card, filters.cost) &&
      this.matchStrength(card, filters.strength) &&
      this.matchEffects(card.effects, filters.effects) &&
      this.matchGems(card.gem_open, filters.gem_open) &&
      this.matchGems(card.gem_close, filters.gem_close) &&
      this.matchErrata(card, filters.errata) &&
      this.matchBanStatus(card, filters.is_ban)
    );
  }

  private matchName(card: Card, name: string): boolean {
    return !name || card.name.toLowerCase().includes(name.toLowerCase());
  }

  private matchExtension(card: Card, extensions: Extension[]): boolean {
    return extensions.length === 0 || extensions.includes(card.extension);
  }

  private matchRarity(card: Card, rarities: Rarity[]): boolean {
    return rarities.length === 0 || rarities.includes(card.rarity);
  }

  private matchClan(card: Card, clans: Clan[]): boolean {
    return clans.length === 0 || clans.includes(card.clan);
  }

  private matchCost(card: Card, costs: Cost[]): boolean {
    return costs.length === 0 || costs.includes(card.cost || 0);
  }

  private matchStrength(card: Card, strengths: number[]): boolean {
    return strengths.length === 0 || strengths.includes(card.strength || 0);
  }

  private matchErrata(card: Card, errata: boolean): boolean {
    if (errata) {
      return card.errata !== null;
    } else {
      return true;
    }
  }

  private matchBanStatus(card: Card, isBan: boolean | undefined): boolean {
    if (isBan === undefined) {
      return true;
    }
    return card.is_ban === isBan;
  }

  private matchEffects(
    cardEffects: Effects[],
    filterEffects: EffectsContentNamesType[]
  ): boolean {
    const mappedFilterEffects = filterEffects.map(
      (uiEffect) => effectsMapping[uiEffect]
    );
    return (
      filterEffects.length === 0 ||
      mappedFilterEffects.every((effect) => cardEffects.includes(effect))
    );
  }

  private matchGems(
    cardGems: Gems[],
    filterGems: GemsContentNamesType[]
  ): boolean {
    if (!cardGems) return false;

    const mappedFilterGems = filterGems.map(
      (uiGem) => gemsMapping[uiGem]
    ) as Gems[];
    return mappedFilterGems.every((gem) => cardGems.includes(gem));
  }
}
