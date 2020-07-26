import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;

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

    if (this.isLoginMode) {
      console.log('login mode!');
    } else {
      this.authService.signUp(email, paswword).subscribe(
        (response) => {
          console.table(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    authForm.reset();
  }
}
