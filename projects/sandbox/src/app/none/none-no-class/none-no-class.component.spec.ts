import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneNoClassComponent } from './none-no-class.component';

describe('NoneNoClassComponent', () => {
  let component: NoneNoClassComponent;
  let fixture: ComponentFixture<NoneNoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneNoClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneNoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
