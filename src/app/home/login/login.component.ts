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

  constructor(
    private authService: AuthenticatorService
    ) {}

  ngOnInit(): void {
  }

  login() {
    if(this.authService.authenticate({user: this.user, password: this.password})) {
      console.log('------------------')
      console.log('LOGADO')
      console.log('------------------')
    } else {
      console.log('------------------')
      console.log('USUÁRIO E/OU SENHA INCORRETOS')
      console.log('------------------')
    }
  }
}
