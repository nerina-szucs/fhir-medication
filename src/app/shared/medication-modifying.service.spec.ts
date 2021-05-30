import { TestBed } from '@angular/core/testing';

import { MedicationModifyingService } from './medication-modifying.service';

describe('MedicationModifyingService', () => {
  let service: MedicationModifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationModifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
