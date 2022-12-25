import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  authenticate(userName: string, password: string): Observable<any> {
    return this.HttpClient.post('http://localhost:3000/users', {
      userName: userName,
      password: password
    });
  }
}
