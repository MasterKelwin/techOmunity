import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public user: string = '';
  public password: string = '';
  public passwordConfirm: string = '';
  public userInvalid: boolean = false;
  public passwordInvalid: boolean = false;
  public passwordsDontMatch: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  signup() {
    if(this.user.length >= 8 && this.password.length >= 8) {
      // this.authService.signup(this.user, this.password)
      // this.router.navigate(['home'])
    } else {
      this.user.length < 8 ? this.userInvalid = true : false;
      this.password.length < 8 ? this.passwordInvalid = true : false;
    }
  }

  verifyPasswords(password: string, passwordConfirm: string){
    password == passwordConfirm ? true : this.passwordsDontMatch = false;
  }

  login() {
    this.router.navigate(['/home'])
  }
}
