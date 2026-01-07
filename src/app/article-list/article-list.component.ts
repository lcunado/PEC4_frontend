import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { Article } from "src/app/models/article";
import { ArticleQuantityChange } from "src/app/models/article-quantity-change";

@Component({
  selector: "app-article-list",
  template: `
    <app-article-item
      [article]="article"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let article of articles"
    ></app-article-item>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent implements OnInit {
  public articles: Article[];
  constructor() {}

  ngOnInit() {
    this.articles = [
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
  }
  onQuantityChange(change: ArticleQuantityChange) {
    const article = this.articles.find(({ id }) => change.article.id === id);
    article.quantityInCart += change.changeInQuantity;
  }
}

