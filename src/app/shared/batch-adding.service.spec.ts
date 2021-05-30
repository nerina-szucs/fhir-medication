import { TestBed } from '@angular/core/testing';

import { BatchAddingService } from './batch-adding.service';

describe('BatchAddingService', () => {
  let service: BatchAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
