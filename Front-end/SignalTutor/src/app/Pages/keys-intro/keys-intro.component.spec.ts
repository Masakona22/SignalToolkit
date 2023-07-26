import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysIntroComponent } from './keys-intro.component';

describe('KeysIntroComponent', () => {
  let component: KeysIntroComponent;
  let fixture: ComponentFixture<KeysIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeysIntroComponent]
    });
    fixture = TestBed.createComponent(KeysIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
