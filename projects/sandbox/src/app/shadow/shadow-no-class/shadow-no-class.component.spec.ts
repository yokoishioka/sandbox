import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowNoClassComponent } from './shadow-no-class.component';

describe('ShadowNoClassComponent', () => {
  let component: ShadowNoClassComponent;
  let fixture: ComponentFixture<ShadowNoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowNoClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowNoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
