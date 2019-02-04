import { TestBed, inject } from '@angular/core/testing';

import { RecipeApiService } from './recipe-api.service';

describe('RecipeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeApiService]
    });
  });

  it('should be created', inject([RecipeApiService], (service: RecipeApiService) => {
    expect(service).toBeTruthy();
  }));
});
