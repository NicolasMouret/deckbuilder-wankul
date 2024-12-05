import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthFilterComponent } from './strength-filter.component';

describe('StrengthFilterComponent', () => {
  let component: StrengthFilterComponent;
  let fixture: ComponentFixture<StrengthFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
