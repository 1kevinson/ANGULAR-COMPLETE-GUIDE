import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    const email = authForm.value.email;
    const paswword = authForm.value.password;

    // Hack for user using the console to deactivate JS
    if (!authForm.valid) {
      return;
    }

    this.isLoading = true;
    if (this.isLoginMode) {
      console.log('login mode!');
    } else {
      this.authService.signUp(email, paswword).subscribe(
        (response) => {
          console.table(response);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'An error occured !';
        }
      );
    }

    authForm.reset();
  }
}
