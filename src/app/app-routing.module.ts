import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { ClubsComponent } from './components/clubs/clubs.component';


const routes: Routes =
[
  {
    component: HomeComponent,
    path: '',
    data: {title: 'MITSKY | Home '}
  },
  {
    component: LoginComponent,
    path: 'login',
    data: {title: 'MITSKY | Login'}
  },
  {
    component: UsersComponent,
    path: 'users',
    data: {title: 'MITSKY | Users'}
  },
  {
    component: RegisterComponent,
    path: 'register',
    data: {title: 'MITSKY | Register'}
  },
  {
    component: ClubsComponent,
    path: 'clubs',
    data: {title: 'MITSKY | clubs'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
