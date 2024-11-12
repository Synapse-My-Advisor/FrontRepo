// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  nome: string;
  email: string;
  passwd: string;
  cargo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // URL da API (5000?)

  constructor(private http: HttpClient) {}

  // Função para verificar login (exemplo de autenticação básica)
  login(email: string, passwd: string): Observable<User> {
    const url = `${this.apiUrl}/usuarios`;
    return this.http.post<User>(url, { email, passwd });
  }

  // Criar usuário
  createUser(nome: string, email: string, passwd: string): Observable<User> {
    const url = `${this.apiUrl}/usuarios`;
    return this.http.post<User>(url, { nome, email, passwd });
  }

  // Obter todos os usuários
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Obter um usuário por ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Atualizar um usuário
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // Deletar um usuário
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
