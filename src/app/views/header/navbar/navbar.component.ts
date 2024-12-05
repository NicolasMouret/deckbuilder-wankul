import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Session } from '@supabase/supabase-js';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly auth = inject(AuthService);
  protected isDropdownOpen = false;
  session: Session | null = null;

  constructor() {
    this.session = this.auth.session;
  }

  ngOnInit(): void {
    this.auth.authChanges((event, session) => {
      this.session = session;
    });
  }

  protected signOut(): void {
    console.log('signing out');
    this.auth.signOut();
  }

  protected toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
