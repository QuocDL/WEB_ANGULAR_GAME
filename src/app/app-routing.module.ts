import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailGameComponent } from './pages/detail-game/detail-game.component';
import { LoginPageComponent } from './pages/user/login-page/login-page.component';
import { RegisterPageComponent } from './pages/user/register-page/register-page.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductAdminListComponent } from './pages/admin/product-admin-list/product-admin-list.component';

const routes: Routes = [
  {path: '',
  component: UserLayoutComponent,
    children: [
      {path: '', component: HomePageComponent, },
      {path: 'product/:id', component: DetailGameComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: LoginPageComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {path: '', component: ProductAdminListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
