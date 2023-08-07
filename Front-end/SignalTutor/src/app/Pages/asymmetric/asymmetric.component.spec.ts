import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsymmetricComponent } from './asymmetric.component';

describe('AsymmetricComponent', () => {
  let component: AsymmetricComponent;
  let fixture: ComponentFixture<AsymmetricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsymmetricComponent]
    });
    fixture = TestBed.createComponent(AsymmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
