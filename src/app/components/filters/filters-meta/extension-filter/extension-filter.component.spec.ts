import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionFilterComponent } from './extension-filter.component';

describe('ExtensionFilterComponent', () => {
  let component: ExtensionFilterComponent;
  let fixture: ComponentFixture<ExtensionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
