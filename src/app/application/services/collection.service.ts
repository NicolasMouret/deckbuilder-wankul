import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { SupabaseCollectionRepository } from '../../core/supabase/collection.supabase';
import { UserCollection } from '../../domain/models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private authService = inject(AuthService);
  private userId = this.authService.getUserId();
  private collectionRepository = inject(SupabaseCollectionRepository);
  private collectionSubject = new BehaviorSubject<UserCollection>([]);
  userCollection = this.collectionSubject.asObservable();

  constructor() {
    this.initializeCollection();
  }

  private initializeCollection(): void {
    this.setUserCollectionById(this.userId());
  }

  private setUserCollectionById(userId: string | null): void {
    if (!userId) {
      this.collectionSubject.next([]);
      return;
    }
    this.collectionRepository
      .getCollectionByUserId(userId)
      .then((collection) => this.collectionSubject.next(collection));
  }

  addCardToCollection(userId: string, cardId: number): void {
    this.collectionRepository.addCardToCollection(userId, cardId);
  }

  removeCardFromCollection(userId: string, cardId: number): void {
    this.collectionRepository.removeCardFromCollection(userId, cardId);
  }

  isInCollection(cardId: number): boolean {
    return this.collectionSubject.value.some((card) => card.cardId === cardId);
  }
}
