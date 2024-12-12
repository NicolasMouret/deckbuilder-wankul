import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersViewComponent } from './filters-view.component';

describe('FiltersViewComponent', () => {
  let component: FiltersViewComponent;
  let fixture: ComponentFixture<FiltersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
