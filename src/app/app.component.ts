import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupabaseService } from './core/repositories/supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'deckbuilder-wankul';

  constructor(private readonly supabase: SupabaseService) {}
}
