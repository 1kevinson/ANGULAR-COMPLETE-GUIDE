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
  signUpText: string = null;

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
      this.authService.login(email, paswword).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
          this.error = null;
        },
        (errorResp) => {
          console.log(errorResp);
          this.error = errorResp;
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signUp(email, paswword).subscribe(
        (response) => {
          console.table(response);
          this.signUpText = response
            ? 'Hoorah, you have been registered'
            : 'Unknow...';
          this.isLoading = false;
        },
        (errorResponse) => {
          console.log(errorResponse);
          this.error = errorResponse;
          this.isLoading = false;
        }
      );
    }

    authForm.reset();
  }
}
