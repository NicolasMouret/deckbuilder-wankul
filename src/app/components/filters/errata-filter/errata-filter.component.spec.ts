import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrataFilterComponent } from './errata-filter.component';

describe('ErrataFilterComponent', () => {
  let component: ErrataFilterComponent;
  let fixture: ComponentFixture<ErrataFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrataFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
