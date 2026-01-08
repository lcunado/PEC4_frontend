import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [];
  constructor() { }

  // Obtener todos los artículos 
  getArticles(): Observable<Article[]> { 
    return of(this.articles); 
  } 

  // Cambiar cantidad en carrito 
  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article | undefined> { 
    const article = this.articles.find(a => a.id === articleID); 
    if (article) { 
      article.quantityInCart += changeInQuantity; 
      // Evitar cantidades negativas 
      if (article.quantityInCart < 0) { 
        article.quantityInCart = 0; 
      } 
    } 
    return of(article); 
  } 

  // Crear un artículo nuevo 
  create(article: Article): Observable<Article> { 
    const newId = this.articles.length 
    ? Math.max(...this.articles.map(a => a.id)) + 1 
    : 1; 
    const newArticle: Article = { ...article, id: newId }; 
    this.articles.push(newArticle); 
    return of(newArticle); 
  } 
}