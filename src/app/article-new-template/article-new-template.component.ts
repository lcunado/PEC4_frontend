import { Component, OnInit } from '@angular/core';
import { Article } from "src/app/models/article";


@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent implements OnInit {

  public message = "";
  constructor() {}

  createWine(wineForm) {
    if (wineForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const wine: Article = wineForm.value.wine;
      console.log("Creating wine", wine);
    }
  }
  ngOnInit(): void {
  }

}
