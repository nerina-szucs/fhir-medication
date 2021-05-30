import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymedicationComponent } from './modifymedication.component';

describe('ModifymedicationComponent', () => {
  let component: ModifymedicationComponent;
  let fixture: ComponentFixture<ModifymedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifymedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
