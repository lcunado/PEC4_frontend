import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "src/app/models/article";
import { ArticleQuantityChange } from "src/app/models/article-quantity-change";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article-list",
  template: ` 
    <app-article-item 
      *ngFor="let article of articles$ | async" 
      [article]="article" 
      (quantityChange)="onQuantityChange($event)" >
    </app-article-item> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
  public articles$: Observable<Article[]>; // Observable
  
  constructor(private articleService: ArticleService) { // Asignamos el observable 
    this.articles$ = this.articleService.getArticles(); 
  }

  onQuantityChange(change: ArticleQuantityChange) { 
    this.articleService.changeQuantity( 
      change.article.id, 
      change.changeInQuantity 
    ).subscribe(); 
  }
}

