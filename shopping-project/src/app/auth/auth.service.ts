import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=\n' +
        'AIzaSyB-TYsYdYHeyTwPgrtGPHvrb-x-hoajzJg',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
