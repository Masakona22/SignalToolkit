import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroQuestionsComponent } from './intro-questions.component';

describe('IntroQuestionsComponent', () => {
  let component: IntroQuestionsComponent;
  let fixture: ComponentFixture<IntroQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroQuestionsComponent]
    });
    fixture = TestBed.createComponent(IntroQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
