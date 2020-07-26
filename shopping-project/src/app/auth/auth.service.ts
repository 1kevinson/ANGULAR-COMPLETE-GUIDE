import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
        catchError(this.handleError)
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
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An Unknown error occured!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email / user is not found';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Your password is invalid';
        break;
    }
    return throwError(errorMsg);
  }
}
