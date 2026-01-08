import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  // GET con búsqueda opcional 
  getArticles(query?: string): Observable<Article[]> { 
    const url = query ? `${this.apiUrl}?q=${query}` : this.apiUrl; 
    return this.http.get<Article[]>(url); 
  } 
  
  // POST para crear artículo 
  create(article: Article): Observable<Article> { 
    return this.http.post<Article>(this.apiUrl, article); 
  } 
  
  // PATCH para cambiar cantidad 
  changeQuantity(id: number, changeInQuantity: number): Observable<Article> { 
    return this.http.patch<Article>(`${this.apiUrl}/${id}`, { 
      changeInQuantity 
    }); 
  } 
}