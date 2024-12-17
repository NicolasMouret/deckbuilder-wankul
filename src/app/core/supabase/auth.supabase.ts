import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthError,
  AuthResponse,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthRepository {
  _session: AuthSession | null = null;
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getSession(): AuthSession | null {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
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

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  async getUserId(): Promise<string | null> {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();
    if (user === null) return null;
    return user.id;
  }
}
