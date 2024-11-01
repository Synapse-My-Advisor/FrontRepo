import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isRegisterMode: boolean = false;

  toggleMode(isRegister: boolean) {
    this.isRegisterMode = isRegister;
  }
}

