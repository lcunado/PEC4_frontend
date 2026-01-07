import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleItemComponent } from './article-item/article-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
