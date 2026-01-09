import { Component } from "@angular/core";
import { Observable, Subject } from "rxjs"; 
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators"; 
import { Article } from "src/app/models/article"; 
import { ArticleService } from "src/app/services/article.service";

@Component({ 
  selector: "app-article-list", 
  templateUrl: "./article-list.component.html", 
  styleUrls: ["./article-list.component.css"]
})
    

export class ArticleListComponent {
  articles$!: Observable<Article[]>; // Observable
  private searchTerms = new Subject<string>();

  constructor(private articleService: ArticleService) {} 
  
  ngOnInit() { 
    // Cargar todos los artículos al inicio 
    this.articles$ = this.articleService.getArticles(); 
    
    // Escuchar búsquedas del usuario 
    this.searchTerms.pipe( 
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap(term => this.articleService.getArticles(term)) 
    ).subscribe(articles => { 
      this.articles$ = new Observable(observer => observer.next(articles)); 
    });
  } 
  
  // Método search
  search(term: string) { 
    this.searchTerms.next(term); 
  } 
  
  // Método onQuantityChange
  onQuantityChange(change: any) { 
    this.articleService.changeQuantity(change.article.id, change.changeInQuantity) 
    .subscribe(); 
  } 
}

