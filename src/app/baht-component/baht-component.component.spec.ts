import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahtComponentComponent } from './baht-component.component';

describe('BahtComponentComponent', () => {
  let component: BahtComponentComponent;
  let fixture: ComponentFixture<BahtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahtComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
