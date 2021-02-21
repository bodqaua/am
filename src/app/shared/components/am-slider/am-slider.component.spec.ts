import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmSliderComponent } from './am-slider.component';

describe('AmSliderComponent', () => {
  let component: AmSliderComponent;
  let fixture: ComponentFixture<AmSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
