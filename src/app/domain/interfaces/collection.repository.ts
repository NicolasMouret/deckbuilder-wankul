import { UserCollection } from '../models/collection.model';

export interface CollectionRepository {
  getCollectionByUserId(userId: string): Promise<UserCollection>;
  addCardToCollection(userId: string, cardId: number): Promise<void>;
  removeCardFromCollection(userId: string, cardId: number): Promise<void>;
}
