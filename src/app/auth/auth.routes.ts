import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const AUTH_ROUTES: Routes = [
  { path: '', component: AuthLayoutComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'request-password', component: RequestPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
  ]},
];
