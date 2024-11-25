import { Component } from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  session: Session | null = null;

  constructor(private readonly auth: AuthService) {
    this.session = this.auth.session;
  }
}
