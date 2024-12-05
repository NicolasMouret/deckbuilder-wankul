import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsFilterComponent } from './gems-filter.component';

describe('GemsFilterComponent', () => {
  let component: GemsFilterComponent;
  let fixture: ComponentFixture<GemsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GemsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
