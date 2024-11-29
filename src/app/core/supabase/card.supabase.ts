import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
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
    const { data, error } = await this.supabase.from('cards').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
