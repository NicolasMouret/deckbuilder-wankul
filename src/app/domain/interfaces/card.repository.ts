import { Card } from '../models/card.model';

export interface CardRepository {
  getAllCards(): Promise<Card[]>;
}
