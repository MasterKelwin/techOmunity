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
    this.authService.authenticate(this.user, this.password).subscribe({
      next: (user) => {
        console.log('------------------')
        console.log({ user: user })
        console.log('------------------')
      },
      error: (err) => {
        console.log('------------------')
        console.log({ error: err })
        console.log('------------------')
      }
    })
  }
}
