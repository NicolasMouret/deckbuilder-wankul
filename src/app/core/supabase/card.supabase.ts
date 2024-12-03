import { Injectable } from '@angular/core';
import {
  createClient,
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { CardRepository } from '../../domain/interfaces/card.repository';
import { Card } from '../../domain/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseCardRepository implements CardRepository {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getAllCards(): Promise<Card[]> {
    const { data, error } = (await this.supabase
      .from('cards')
      .select('*')
      .order('id', { ascending: true })) as {
      data: Card[] | null;
      error: PostgrestError | null;
    };
    if (error) {
      throw new Error(error.message);
    }
    if (!data) {
      return [];
    }
    return data;
  }
}
