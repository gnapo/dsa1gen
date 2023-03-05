import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffenschadenlineComponent } from './waffenschadenline.component';

describe('WaffenschadenlineComponent', () => {
  let component: WaffenschadenlineComponent;
  let fixture: ComponentFixture<WaffenschadenlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaffenschadenlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaffenschadenlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
