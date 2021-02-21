import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmSliderTimeoutComponent } from './am-slider-timeout.component';

describe('AmSliderTimeoutComponent', () => {
  let component: AmSliderTimeoutComponent;
  let fixture: ComponentFixture<AmSliderTimeoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmSliderTimeoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmSliderTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
