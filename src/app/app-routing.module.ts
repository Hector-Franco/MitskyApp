import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
