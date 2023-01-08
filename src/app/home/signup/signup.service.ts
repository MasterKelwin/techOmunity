import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInterface } from '../../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  readonly apiURL: string = 'http://localhost:3000/'

  constructor(
    private HttpClient: HttpClient
  ) { }

  signup(user: userInterface) {
    return this.HttpClient.post(`${this.apiURL}users`, user);
  }


}
