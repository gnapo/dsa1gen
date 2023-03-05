import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffenpickerComponent } from './waffenpicker.component';

describe('WaffenpickerComponent', () => {
  let component: WaffenpickerComponent;
  let fixture: ComponentFixture<WaffenpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaffenpickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaffenpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
