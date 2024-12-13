import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFilterComponent } from './open-filter.component';

describe('OpenFilterComponent', () => {
  let component: OpenFilterComponent;
  let fixture: ComponentFixture<OpenFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
