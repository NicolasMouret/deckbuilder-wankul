import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, from, map, throwError } from 'rxjs';
import { SupabaseService } from '../repositories/supabase.service';

export interface AuthInterface {
  signUpWithEmail(
    email: string,
    password: string,
    username: string
  ): Observable<void>;
  signInWithEmail(email: string, password: string): Observable<void>;
  signOut(): Observable<void>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthInterface {
  constructor(
    private readonly authRepository: SupabaseService,
    private router: Router
  ) {}

  signUpWithEmail(
    email: string,
    password: string,
    username: string
  ): Observable<void> {
    return from(
      this.authRepository.signUpEmail(email, password, username)
    ).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        this.router.navigate(['/']);
      }),
      catchError((error) =>
        throwError(() => new Error(error.message || 'Une erreur est survenue.'))
      )
    );
  }

  signInWithEmail(email: string, password: string): Observable<void> {
    return from(this.authRepository.signInEmail(email, password)).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        this.router.navigate(['/']);
      }),
      catchError((error) =>
        throwError(() => new Error(error.message || 'Une erreur est survenue.'))
      )
    );
  }

  signOut(): Observable<void> {
    return from(this.authRepository.signOut()).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        this.router.navigate(['/sign-in']);
      }),
      catchError((error) =>
        throwError(() => new Error(error.message || 'Une erreur est survenue.'))
      )
    );
  }
}
