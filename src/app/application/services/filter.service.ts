import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardFilters } from '../../domain/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filtersSubject = new BehaviorSubject<CardFilters>({});
  filters$ = this.filtersSubject.asObservable();

  updateFilters(newFilters: Partial<CardFilters>) {
    const currentFilters = this.filtersSubject.value;
    const updatedFilters = { ...currentFilters, ...newFilters };
    console.log('Updated filters in service', updatedFilters);
    this.filtersSubject.next(updatedFilters);
  }
}
