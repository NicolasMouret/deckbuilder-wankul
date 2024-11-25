import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  signInForm: FormGroup;
  formSubmitted = signal<Boolean>(false);
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.formSubmitted.set(true);
    const { email, password } = this.signInForm.value;
    this.authService.signInWithEmail(email, password).subscribe((result) => {
      if (result.error) {
        console.error(result.error);
        this.errorMessage = result.error.message;
      } else {
        console.log('User signed in');
        this.router.navigateByUrl('/');
      }
    });
  }
}
