import { Component } from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { CardService } from '../../application/services/card.service';
import { AuthService } from '../../core/services/auth.service';
import { Card, CardFilters } from '../../domain/models/card.model';
import { FilterCardsUseCase } from './../../domain/use-cases/filter-cards.use-case';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  session: Session | null = null;
  filters: CardFilters = {};
  filteredCards: Card[] = [];

  constructor(
    private readonly auth: AuthService,
    private filterUseCase: FilterCardsUseCase,
    private cardService: CardService
  ) {
    this.session = this.auth.session;
  }

  ngOnInit(): void {
    this.auth.authChanges((event, session) => {
      this.session = session;
    });
  }

  applyFilters(filters: CardFilters): void {
    this.filteredCards = this.cardService.getAllCards();
  }
}
