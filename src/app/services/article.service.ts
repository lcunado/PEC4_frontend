import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [ 
    { 
      id: 1, 
      name: "Domaine de la Butte La Pied de la Butte", 
      imageUrl: "assets/images/wine1.jpg", 
      price: 19.95, 
      isOnSale: false, 
      quantityInCart: 0 
    }, 
    { 
      id: 2, 
      name: "Lolo", 
      imageUrl: "assets/images/wine2.jpg", 
      price: 6.15, 
      isOnSale: true, 
      quantityInCart: 0 
    }, 
    { 
      id: 3, 
      name: "Pago de Carraovejas", 
      imageUrl: "assets/images/wine3.jpg", 
      price: 31.9, 
      isOnSale: false, 
      quantityInCart: 0 
    } 
  ];
  
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