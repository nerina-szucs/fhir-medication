import { TestBed } from '@angular/core/testing';

import { BatchModifyingService } from './batch-modifying.service';

describe('BatchModifyingService', () => {
  let service: BatchModifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchModifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
