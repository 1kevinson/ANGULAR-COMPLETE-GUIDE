import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  signUpText: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    const email = authForm.value.email;
    const paswword = authForm.value.password;
    let authObs;

    // Hack for user using the console to deactivate JS
    if (!authForm.valid) {
      return;
    }

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, paswword);
    } else {
      authObs = this.authService.signUp(email, paswword);
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        !this.isLoginMode
          ? (this.signUpText = response
              ? 'Welcome, you have been registered!'
              : 'Unknow...')
          : null;

        this.isLoading = false;
        this.router.navigate(['/recipes']);
        this.error = null;
      },
      (errorResp) => {
        console.log(errorResp);
        this.error = errorResp;
        this.isLoading = false;
      }
    );

    authForm.reset();
  }
}
