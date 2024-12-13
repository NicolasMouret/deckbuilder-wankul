import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseFilterComponent } from './close-filter.component';

describe('CloseFilterComponent', () => {
  let component: CloseFilterComponent;
  let fixture: ComponentFixture<CloseFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
