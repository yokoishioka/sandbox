import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowClassComponent } from './shadow-class.component';

describe('ShadowClassComponent', () => {
  let component: ShadowClassComponent;
  let fixture: ComponentFixture<ShadowClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
