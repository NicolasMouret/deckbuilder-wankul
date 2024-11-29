import { Injectable } from '@angular/core';
import { SupabaseCardRepository } from '../../core/supabase/card.supabase';
import { Card } from '../../domain/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private allCards: Card[] = [];

  constructor(private cardRepository: SupabaseCardRepository) {
    this.loadAllCards();
  }

  async loadAllCards(): Promise<void> {
    this.allCards = await this.cardRepository.getAllCards();
  }

  getAllCards(): Card[] {
    return this.allCards;
  }
}
