import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdComponentComponent } from './usd-component.component';

describe('UsdComponentComponent', () => {
  let component: UsdComponentComponent;
  let fixture: ComponentFixture<UsdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsdComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
