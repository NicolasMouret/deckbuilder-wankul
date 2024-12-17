import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { AuthResponse } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { SupabaseAuthRepository } from '../supabase/auth.supabase';

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
  private readonly authRepository = inject(SupabaseAuthRepository);
  private _userId: string | null = null;
  private userId = signal<string | null>(null);

  constructor() {
    this.initializeUserId();
  }

  private async initializeUserId() {
    this._userId = await this.authRepository.getUserId();
    this.userId.set(this._userId);
  }

  getUserId(): WritableSignal<string | null> {
    return this.userId;
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
