import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatlineComponent } from './statline.component';

describe('StatlineComponent', () => {
  let component: StatlineComponent;
  let fixture: ComponentFixture<StatlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
