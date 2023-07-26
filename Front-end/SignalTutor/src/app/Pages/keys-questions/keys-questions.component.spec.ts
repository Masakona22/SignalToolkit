import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysQuestionsComponent } from './keys-questions.component';

describe('KeysQuestionsComponent', () => {
  let component: KeysQuestionsComponent;
  let fixture: ComponentFixture<KeysQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeysQuestionsComponent]
    });
    fixture = TestBed.createComponent(KeysQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
