//create an authService using supabase.service.ts

import { Injectable } from '@angular/core';
import { AuthResponse } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { SupabaseService } from '../repositories/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}

  signUpWithEmail(
    email: string,
    password: string,
    username: string
  ): Observable<AuthResponse> {
    return this.supabase.signUpWithEmail(email, password, username);
  }
}
