import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from "src/app/models/article";
import { NameArticleValidator } from 'src/app/validators/name-article-validator';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent implements OnInit {

  public message = "";

  public wineForm : FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
 
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, NameArticleValidator.nameArticleValidator]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [
        "",
        [
          Validators.required,
          Validators.pattern("^http(s?)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(/S*)?$")
        ]
      ],
      isOnSale: false
    });
  }

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const wine: Article = this.wineForm.value;
      console.log("Creating wine", wine);
    }
  }
}
