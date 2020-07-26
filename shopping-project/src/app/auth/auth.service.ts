import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

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
  user = new Subject<User>();

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
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=\n' +
          'AIzaSyB-TYsYdYHeyTwPgrtGPHvrb-x-hoajzJg',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        // tap allow to perform some action without changing the response (block it,stop it or change it)
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    // ONCE LOGGED IN DISPATCH THE USER DATA THEN WE CAN CHECK IF IT'S LOGGED OR NOT
    this.user.next(user);
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