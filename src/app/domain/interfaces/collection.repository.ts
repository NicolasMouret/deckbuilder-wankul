import { UserCollection } from '../models/collection.model';

export interface CollectionRepository {
  getCollectionByUserId(userId: number): Promise<UserCollection>;
  addCardToCollection(userId: number, cardId: number): Promise<void>;
  removeCardFromCollection(userId: number, cardId: number): Promise<void>;
}
