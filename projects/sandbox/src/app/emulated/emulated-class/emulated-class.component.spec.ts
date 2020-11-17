import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedClassComponent } from './emulated-class.component';

describe('EmulatedClassComponent', () => {
  let component: EmulatedClassComponent;
  let fixture: ComponentFixture<EmulatedClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulatedClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
