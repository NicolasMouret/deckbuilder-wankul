import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseCollectionRepository } from '../../core/supabase/collection.supabase';
import { UserCollection } from '../../domain/models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private collectionRepository = inject(SupabaseCollectionRepository);
  private collectionSubject = new BehaviorSubject<UserCollection>([]);
  private userCollection = this.collectionSubject.asObservable();

  getUserCollectionById(userId: number): Observable<UserCollection> {
    this.collectionRepository
      .getCollectionByUserId(userId)
      .then((collection) => this.collectionSubject.next(collection));

    return this.userCollection;
  }

  addCardToCollection(userId: number, cardId: number): void {
    this.collectionRepository.addCardToCollection(userId, cardId);
  }

  removeCardFromCollection(userId: number, cardId: number): void {
    this.collectionRepository.removeCardFromCollection(userId, cardId);
  }
}
