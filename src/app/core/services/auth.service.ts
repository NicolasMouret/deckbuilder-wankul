import { Injectable, signal } from '@angular/core';
import { AuthResponse, Session } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { SupabaseService } from '../repositories/supabase.service';

export type CurrentUser = {
  email: string;
  username: string;
};

export interface AuthInterface {
  signUpWithEmail(
    email: string,
    password: string,
    username: string
  ): Observable<AuthResponse>;
  signInWithEmail(email: string, password: string): Observable<AuthResponse>;
  signOut(): void;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthInterface {
  sessionSignal = signal<Session | null>(null);
  _session: Session | null = null;

  constructor(private readonly authRepository: SupabaseService) {
    this._session = this.authRepository.session;
  }

  get session(): Session | null {
    return this._session;
  }

  authChanges(callback: (event: any, session: any) => void) {
    return this.authRepository.authChanges(callback);
  }

  signUpWithEmail(
    username: string,
    email: string,
    password: string
  ): Observable<AuthResponse> {
    const promise = this.authRepository.signUpEmail(email, password, username);
    return from(promise);
  }

  signInWithEmail(email: string, password: string): Observable<AuthResponse> {
    const promise = this.authRepository.signInEmail(email, password);
    return from(promise);
  }

  signOut(): void {
    this.authRepository.signOut();
  }
}
