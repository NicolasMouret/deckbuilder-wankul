import { Injectable } from '@angular/core';
import { CardService } from '../../application/services/card.service';
import { Card, CardFilters, Effects, Gems } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class FilterCardsUseCase {
  constructor(private cardService: CardService) {}

  execute(filters: CardFilters): Card[] {
    const cards = this.cardService.getAllCards();
    return cards.filter((card) => {
      return (
        (!filters.name ||
          card.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.extension || filters.extension.includes(card.extension)) &&
        (!filters.rarity || filters.rarity.includes(card.rarity)) &&
        (!filters.clan || filters.clan.includes(card.clan)) &&
        (!filters.cost || filters.cost.includes(card.cost || 0)) &&
        (!filters.strength || filters.strength.includes(card.strength || 0)) &&
        (!filters.effects ||
          this.matchEffects(card.effects, filters.effects)) &&
        (!filters.gem_open ||
          this.matchGems(card.gem_open, filters.gem_open)) &&
        (!filters.gem_close ||
          this.matchGems(card.gem_close, filters.gem_close)) &&
        (filters.errata === undefined || filters.errata === !!card.errata) &&
        (filters.is_ban === undefined || filters.is_ban === card.is_ban)
      );
    });
  }

  private matchEffects(
    cardEffects: Effects[],
    filterEffects: string[]
  ): boolean {
    const uiToDbEffects: Record<string, Effects> = {
      'Effet permanent': 'permanent',
      Combo: 'combo',
      'Fait piocher': 'draw',
      Scoreur: 'scorer',
      'Effet sub': 'sub',
      'Fait défausser un personnage adverse (max force 1)': 'discard_max_1',
      'Fait défausser un personnage adverse (max force 2)': 'discard_max_2',
      'Fait défausser un personnage adverse (max force 3)': 'discard_max_3',
    };

    const mappedFilterEffects = filterEffects.map(
      (uiEffect) => uiToDbEffects[uiEffect]
    );
    return mappedFilterEffects.every((effect) => cardEffects.includes(effect));
  }

  private matchGems(cardGems: Gems[] | null, filterGems: string[]): boolean {
    if (!cardGems) return false;

    const uiToDbGems: Record<string, Gems> = {
      Orange: 'orange',
      Violet: 'purple',
    };

    const mappedFilterGems = filterGems.map((uiGem) => uiToDbGems[uiGem]);
    return mappedFilterGems.every((gem) => cardGems.includes(gem));
  }
}
