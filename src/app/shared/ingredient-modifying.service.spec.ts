import { TestBed } from '@angular/core/testing';

import { IngredientModifyingService } from './ingredient-modifying.service';

describe('IngredientModifyingService', () => {
  let service: IngredientModifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientModifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
