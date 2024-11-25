import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Session } from '@supabase/supabase-js';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  session: Session | null = null;
  constructor(private readonly auth: AuthService) {
    this.session = this.auth.session;
  }

  ngOnInit(): void {
    this.auth.authChanges((event, session) => {
      this.session = session;
    });
  }

  signOut(): void {
    console.log('signing out');
    this.auth.signOut();
  }
}
