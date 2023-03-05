import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuestungpickerComponent } from './ruestungpicker.component';

describe('RuestungpickerComponent', () => {
  let component: RuestungpickerComponent;
  let fixture: ComponentFixture<RuestungpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuestungpickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuestungpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
