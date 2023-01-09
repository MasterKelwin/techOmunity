import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';
import { newUser } from 'src/app/interfaces/new-user';
import { SignupService } from './signup.service';

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

  public newUserForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: SignupService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      user: [''],
      password: [''],
      passwordConfirm: ['']
    })
  }

  signup() {
    const newUser = this.newUserForm.getRawValue() as newUser;
    
    if(this.verifyPasswords(newUser.password, newUser.passwordConfirm)) {
      this.passwordsDontMatch = false;
      this.service.signup({user: newUser.user, password: newUser.password}).subscribe({
        next: (user) => {

        },
        error: (err) => {
          console.log('------------------')
          console.log({ singUpError: err })
          console.log('------------------')
        }
      });
      this.router.navigate(['feed'])
    } else {
      this.passwordsDontMatch = true;
    }

  }

  verifyPasswords(password: string, passwordConfirm: string): boolean{
    return password == passwordConfirm ? true : false;
  }

}
