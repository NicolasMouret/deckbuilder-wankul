import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardFilters } from '../../domain/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  initialFilters: CardFilters = {
    name: '',
    extension: [],
    rarity: [],
    clan: [],
    cost: [],
    strength: [],
    effects: [],
    errata: false,
    is_ban: false,
    gem_open: [],
    gem_close: [],
    is_in_collection: false,
  };
  private filtersSubject = new BehaviorSubject<CardFilters>(
    this.initialFilters
  );
  filters$ = this.filtersSubject.asObservable();

  updateFilters(newFilters: Partial<CardFilters>) {
    const currentFilters = this.filtersSubject.value;
    const updatedFilters = { ...currentFilters, ...newFilters };
    console.table(updatedFilters);
    this.filtersSubject.next(updatedFilters);
  }

  resetFilters() {
    this.filtersSubject.next(this.initialFilters);
  }
}
