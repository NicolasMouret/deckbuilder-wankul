import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaViewComponent } from './meta-view.component';

describe('MetaViewComponent', () => {
  let component: MetaViewComponent;
  let fixture: ComponentFixture<MetaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
