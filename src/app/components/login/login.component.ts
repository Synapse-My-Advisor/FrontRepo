import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariableBinding } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  form!: FormGroup

  [x: string]: any;
  isRegisterMode: boolean = false;

  toggleMode(isRegister: boolean) {
    this.isRegisterMode = isRegister;
  }

  nome: string = '';
  email: string = '';
  passwd: string = '';
  errorMessage: string = '404';

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', Validators.required]
    })
  }

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
      (response) => {
        // Cadastro bem-sucedido, redireciona para a página principal (ou outra rota)
        console.log('Cadastro bem-sucedido', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Cadastro falhou
        this.errorMessage = error.error?.message || 'Erro ao cadastrar usuário';
        console.error(error);
      }
    );
  }

  newUser() {
    const formValue = {
      nome: this.form.get('name')!.value,
      email: this.form.get('email')!.value,
      passwd: this.form.get('passwd')!.value,
      cargo: 'aluno'
    }

    if (this.form!.valid) {
      this.authService.register(formValue).subscribe(
        (post) => {
          console.log(post)
          this.router.navigate(['/home'])
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  abertoLog: boolean = true;
  abertoReg: boolean = true;
  mostrarSenha() {
    this.abertoLog = !this.abertoLog;
    this.abertoReg = !this.abertoReg;
  }

}

