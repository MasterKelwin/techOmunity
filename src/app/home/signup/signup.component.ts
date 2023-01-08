import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';
import { userInterface } from 'src/app/interfaces/user';
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
    const newUser = this.newUserForm.getRawValue() as userInterface;
    console.log('------------------')
    console.log({ response: newUser })
    console.log('------------------')
  }

  verifyPasswords(password: string, passwordConfirm: string){
    password == passwordConfirm ? true : this.passwordsDontMatch = false;
  }

}
