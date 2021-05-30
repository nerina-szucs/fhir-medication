import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBatchComponent } from './modify-batch.component';

describe('ModifyBatchComponent', () => {
  let component: ModifyBatchComponent;
  let fixture: ComponentFixture<ModifyBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
