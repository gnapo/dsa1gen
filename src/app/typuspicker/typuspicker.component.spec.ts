import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypuspickerComponent } from './typuspicker.component';

describe('TypuspickerComponent', () => {
  let component: TypuspickerComponent;
  let fixture: ComponentFixture<TypuspickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypuspickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypuspickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
