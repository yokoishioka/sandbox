import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneClassComponent } from './none-class.component';

describe('NoneClassComponent', () => {
  let component: NoneClassComponent;
  let fixture: ComponentFixture<NoneClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
