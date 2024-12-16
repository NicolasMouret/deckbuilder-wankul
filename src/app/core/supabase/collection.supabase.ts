import { Injectable } from '@angular/core';
import {
  createClient,
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { CollectionRepository } from '../../domain/interfaces/collection.repository';
import {
  CollectionDBEntry,
  UserCollection,
} from '../../domain/models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseCollectionRepository implements CollectionRepository {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getCollectionByUserId(userId: number): Promise<UserCollection> {
    const { data, error } = (await this.supabase
      .from('collections')
      .select('*')
      .eq('user_id', userId)) as {
      data: CollectionDBEntry[];
      error: PostgrestError | null;
    };

    if (error) {
      throw new Error(error.message);
    }

    const cards: UserCollection = data.map((entry) => ({
      cardId: entry.card_id,
      quantity: entry.quantity,
    }));

    return cards;
  }

  async addCardToCollection(userId: number, cardId: number): Promise<void> {
    const { data } = (await this.supabase
      .from('collections')
      .select('*')
      .eq('user_id', userId)
      .eq('card_id', cardId)
      .limit(1)
      .single()) as {
      data: CollectionDBEntry | null;
    };

    if (data === null) {
      await this.createEntryInCollection(userId, cardId);
      return;
    }

    if (data.quantity >= 1) {
      await this.incrementCardQuantity(data);
    }
  }

  async removeCardFromCollection(
    userId: number,
    cardId: number
  ): Promise<void> {
    const { data } = (await this.supabase
      .from('collections')
      .select('*')
      .eq('user_id', userId)
      .eq('card_id', cardId)
      .limit(1)
      .single()) as {
      data: CollectionDBEntry;
    };

    if (data.quantity <= 1) {
      await this.deleteEntryFromCollection(data);
    }

    if (data.quantity > 1) {
      await this.decrementCardQuantity(data);
    }
  }

  private async createEntryInCollection(
    userId: number,
    cardId: number
  ): Promise<void> {
    await this.supabase.from('collections').insert([
      {
        user_id: userId,
        card_id: cardId,
        quantity: 1,
      },
    ]);
  }

  private async deleteEntryFromCollection(
    entry: CollectionDBEntry
  ): Promise<void> {
    await this.supabase
      .from('collections')
      .delete()
      .eq('user_id', entry.user_id)
      .eq('card_id', entry.card_id);
  }

  private async incrementCardQuantity(entry: CollectionDBEntry): Promise<void> {
    await this.supabase
      .from('collections')
      .update({ quantity: entry.quantity + 1 })
      .eq('user_id', entry.user_id)
      .eq('card_id', entry.card_id);
  }

  private async decrementCardQuantity(entry: CollectionDBEntry): Promise<void> {
    await this.supabase
      .from('collections')
      .update({ quantity: entry.quantity - 1 })
      .eq('user_id', entry.user_id)
      .eq('card_id', entry.card_id);
  }
}
