import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  signUpForm: FormGroup;
  formSubmitted = signal<Boolean>(false);
  errorMessage: string | null = null;

  constructor() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.formSubmitted.set(true);
    const { username, email, password } = this.signUpForm.value;
    this.authService
      .signUpWithEmail(username, email, password)
      .subscribe((result) => {
        if (result.error) {
          console.error(result.error);
          this.errorMessage = result.error.message;
        } else {
          console.log('User signed up');
          this.router.navigateByUrl('/');
        }
      });
  }
}
