import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public user: string = '';
  public password: string = '';

  constructor(
    private authService: AuthenticatorService
    ) {}

  ngOnInit(): void {
    this.login()
  }

  login() {
    this.authService.authenticate(this.user, this.password)
    .subscribe(() => {
      console.log('----------')
      console.log('--logado--')
      console.log('----------')
    },
    (error) => {
      console.log('----------')
      console.log({err: error})
      console.log('----------')
    })
  }

}


