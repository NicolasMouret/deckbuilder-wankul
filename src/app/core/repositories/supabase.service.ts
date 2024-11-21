import { Injectable } from '@angular/core';
import {
  AuthError,
  AuthResponse,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  signUpEmail(
    email: string,
    password: string,
    username: string
  ): Promise<AuthResponse> {
    return this.supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
  }

  signInEmail(email: string, password: string): Promise<AuthResponse> {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  signOut(): Promise<{ error: AuthError | null }> {
    return this.supabase.auth.signOut();
  }

  getCurrentUser() {
    return this.supabase.auth.getUser();
  }
}
