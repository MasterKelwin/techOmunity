import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userInterface } from '../interfaces/user'


@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  readonly apiURL: string = 'http://localhost:3000';
  private users: any = this.getUsers();
  private authenticatedUser: userInterface[] = [];

  constructor(
    private HttpClient: HttpClient,
  ) { }

  authenticate(user: userInterface) {
    this.verifyUser(user);    
    if(this.authenticatedUser.length > 0) {
      return true
    } else return false
  }

  verifyUser(user: userInterface) {
    this.users.map((e: userInterface) => {
      if(e.user === user.user && e.password === user.password) {
        return this.authenticatedUser.push(e)
      } else return false;
    });
  }
  
  getUsers() {
    return this.HttpClient.get('http://localhost:3000/users')
      .subscribe({
        next: (res) => {
          return this.users = res;
        },
        error: (err) => {
          console.log('------------------')
          console.log({ error: err })
          console.log('------------------')
        }
      })
  }

  register(userName: string, password: string): Observable<any> {
    return this.HttpClient.post(`${this.apiURL}/users`, {
      userName: userName,
      password: password
    });
  }

  
}
