import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch:'full', 
    component: HomeComponent, 
    children: [{
      path: '',
      component: LoginComponent
    }]
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: HomeComponent,
    children: [{
      path: '',
      component: SignupComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
