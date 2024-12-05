import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanFilterComponent } from './clan-filter.component';

describe('ClanFilterComponent', () => {
  let component: ClanFilterComponent;
  let fixture: ComponentFixture<ClanFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
