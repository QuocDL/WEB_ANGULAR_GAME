import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { DetailGameComponent } from './pages/detail-game/detail-game.component';
import { SafePipe } from './pipes/safe.pipe';
import { LoginPageComponent } from './pages/user/login-page/login-page.component';
import { RegisterPageComponent } from './pages/user/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLayoutComponent,
    FooterComponent,
    HomePageComponent,
    SearchPipePipe,
    DetailGameComponent,
    SafePipe,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
