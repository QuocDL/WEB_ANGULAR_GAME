import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailGameComponent } from './pages/detail-game/detail-game.component';
import { LoginPageComponent } from './pages/user/login-page/login-page.component';
import { RegisterPageComponent } from './pages/user/register-page/register-page.component';

const routes: Routes = [
  {path: '',
  component: UserLayoutComponent,
  children: [
    {path: '', component: HomePageComponent, },
    {path: 'product/:id', component: DetailGameComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
