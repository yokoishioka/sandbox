import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedNoClassComponent } from './emulated-no-class.component';

describe('EmulatedNoClassComponent', () => {
  let component: EmulatedNoClassComponent;
  let fixture: ComponentFixture<EmulatedNoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulatedNoClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedNoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
