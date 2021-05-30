import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMedicationComponent } from './modify-medication.component';

describe('ModifyMedicationComponent', () => {
  let component: ModifyMedicationComponent;
  let fixture: ComponentFixture<ModifyMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
