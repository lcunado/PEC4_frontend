import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body: LoginRequest = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  register(username: string): Observable<any> {
    const body: RegisterRequest = { username };
    return this.http.post<any>(`${this.apiUrl}/register`, body);
  }
}

