import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private tokenSubject = new BehaviorSubject<string | null>(this.getTokenFromStorage());

  token$ = this.tokenSubject.asObservable();

  constructor() {}

  private getTokenFromStorage(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this.tokenSubject.next(token);
  }

  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }
}

