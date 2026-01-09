import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/user-store.service';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {

  constructor(private userStore: UserStoreService) {} 
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    const token = this.userStore.getToken(); 
    
    if (token) { 
      const authReq = request.clone({ 
        setHeaders: { 
          Authorization: `Bearer ${token}` 
        } 
      }); 
      return next.handle(authReq); 
    } 
    
    return next.handle(request); 
  } 
}
