import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeadmComponent } from './components/homeadm/homeadm.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para login por padrão
  // { path: '**', redirectTo: '/login' }, // Rota para 404 ou redirecionamento
  { path: 'home', component: HomeComponent },
  { path: 'homeadm', component: HomeadmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
