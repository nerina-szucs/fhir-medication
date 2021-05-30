import { TestBed } from '@angular/core/testing';

import { MedicationAddingService } from './medication-adding.service';

describe('MedicationAddingService', () => {
  let service: MedicationAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
