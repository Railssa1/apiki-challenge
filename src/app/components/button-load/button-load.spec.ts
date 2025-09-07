import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoad } from './button-load';

describe('ButtonLoad', () => {
  let component: ButtonLoad;
  let fixture: ComponentFixture<ButtonLoad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLoad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
