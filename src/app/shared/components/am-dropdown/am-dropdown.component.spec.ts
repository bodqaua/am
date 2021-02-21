import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmDropdownComponent } from './am-dropdown.component';

describe('AmDropdownComponent', () => {
  let component: AmDropdownComponent;
  let fixture: ComponentFixture<AmDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
