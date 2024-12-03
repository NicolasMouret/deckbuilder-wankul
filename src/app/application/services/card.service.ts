import { inject, Injectable } from '@angular/core';
import { SupabaseCardRepository } from '../../core/supabase/card.supabase';
import { Card } from '../../domain/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cardRepository = inject(SupabaseCardRepository);
  private allCards: Card[] = [];
  private cardsLoaded: Promise<void>;

  constructor() {
    this.cardsLoaded = this.loadAllCards();
  }

  async loadAllCards(): Promise<void> {
    this.allCards = await this.cardRepository.getAllCards();
  }

  async getAllCards(): Promise<Card[]> {
    await this.cardsLoaded;
    return this.sortTerrainCardsFirst(this.allCards);
  }

  // To order the not filtered cards like this:
  // -- First, all terrain cards: sorted by id ascending --
  // -- Then all other cards: sorted by id ascending --
  private sortTerrainCardsFirst(data: Card[]): Card[] {
    const terrainCards = data
      .filter((card) => card.rarity === 'Terrain')
      .sort((a, b) => a.id - b.id);
    const otherCards = data
      .filter((card) => card.rarity !== 'Terrain')
      .sort((a, b) => a.id - b.id);
    return [...terrainCards, ...otherCards];
  }
}
