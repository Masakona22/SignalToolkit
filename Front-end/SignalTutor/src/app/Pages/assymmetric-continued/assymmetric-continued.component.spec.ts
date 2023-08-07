import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssymmetricContinuedComponent } from './assymmetric-continued.component';

describe('AssymmetricContinuedComponent', () => {
  let component: AssymmetricContinuedComponent;
  let fixture: ComponentFixture<AssymmetricContinuedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssymmetricContinuedComponent]
    });
    fixture = TestBed.createComponent(AssymmetricContinuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
