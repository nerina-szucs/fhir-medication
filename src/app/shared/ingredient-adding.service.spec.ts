import { TestBed } from '@angular/core/testing';

import { IngredientAddingService } from './ingredient-adding.service';

describe('IngredientAddingService', () => {
  let service: IngredientAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
