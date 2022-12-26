import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public user: string = '';
  public password: string = '';
  public loginError: boolean = false;
  public userInvalid: boolean = false;
  public passwordInvalid: boolean = false;

  constructor(
    private authService: AuthenticatorService
    ) {}

  ngOnInit(): void {
  }

  login() {
    if(this.user.length > 8 && this.password.length > 8) {
      if(this.authService.authenticate({user: this.user, password: this.password})) {
        this.loginError = false;
      } else {
        this.loginError = true;
        this.userInvalid = false;
        this.passwordInvalid = false;
      }
    } else {
      this.user.length < 8 ? this.userInvalid = true : false;
      this.password.length < 8 ? this.passwordInvalid = true : false;
    }
  }

}


