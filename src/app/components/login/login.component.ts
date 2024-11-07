import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  [x: string]: any;
  isRegisterMode: boolean = false;

  toggleMode(isRegister: boolean) {
    this.isRegisterMode = isRegister;
  }

  nome: string = '';
  email: string = '';
  passwd: string = '';
  errorMessage: string = '404';

  constructor(private userService: UserService, private router: Router) { }

  // Método para autenticar o usuário
  login(): void {
    this.userService.login(this.email, this.passwd).subscribe(
      (user) => {
        // Login bem-sucedido, redireciona para a página principal (ou outra rota)
        console.log('Login bem-sucedido', user);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Login falhou
        this.errorMessage = 'Email ou senha incorretos';
        console.error(error);
      }
    );
  }

  // Método para cadastrar o usuário
  createUser(): void {
    this.userService.createUser(this.nome, this.email, this.passwd).subscribe(
      (user) => {
        // Cadastro bem-sucedido, redireciona para a página principal (ou outra rota)
        console.log('Cadastro bem-sucedido', user);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Cadastro falhou
        this.errorMessage = 'Email ou senha incorretos';
        console.error(error);
      }
    );
  }

  abertoLog:boolean = true;
  abertoReg:boolean = true;
  mostrarSenha() {
    this.abertoLog = !this.abertoLog;
    this.abertoReg = !this.abertoReg;
  }

}

