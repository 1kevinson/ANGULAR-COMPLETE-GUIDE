import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//Best practice : optional
interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=\n' +
          'AIzaSyB-TYsYdYHeyTwPgrtGPHvrb-x-hoajzJg',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        // Better to handle errors messages in service
        catchError((errorRes) => {
          let errorMsg = 'An Unknown error occured!';

          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMsg);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'This email already exists';
          }
          return throwError(errorMsg);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=\n' +
          'AIzaSyB-TYsYdYHeyTwPgrtGPHvrb-x-hoajzJg',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMsg = 'An Unknown error occured!';

          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMsg);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errorMsg = 'This email / user is not found';
              break;
            case 'INVALID_PASSWORD':
              errorMsg = 'Your password is invalid';
              break;
            case 'USER_DISABLED':
              errorMsg = 'User have been disabled by Admin';
              break;
          }
          return throwError(errorMsg);
        })
      );
  }
}
