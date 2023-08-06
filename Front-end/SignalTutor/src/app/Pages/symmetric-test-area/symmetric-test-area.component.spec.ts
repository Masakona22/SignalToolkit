import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricTestAreaComponent } from './symmetric-test-area.component';

describe('SymmetricTestAreaComponent', () => {
  let component: SymmetricTestAreaComponent;
  let fixture: ComponentFixture<SymmetricTestAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymmetricTestAreaComponent]
    });
    fixture = TestBed.createComponent(SymmetricTestAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
