import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { HomeComponent } from './components/home/home.component';
import { HomeadmComponent } from './components/homeadm/homeadm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdvisorComponent,
    HomeComponent,
    HomeadmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
