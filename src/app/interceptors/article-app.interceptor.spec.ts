import { TestBed } from '@angular/core/testing';

import { ArticleAppInterceptor } from './article-app.interceptor';

describe('ArticleAppInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ArticleAppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ArticleAppInterceptor = TestBed.inject(ArticleAppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
