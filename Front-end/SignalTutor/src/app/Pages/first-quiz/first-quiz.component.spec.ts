import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQuizComponent } from './first-quiz.component';

describe('FirstQuizComponent', () => {
  let component: FirstQuizComponent;
  let fixture: ComponentFixture<FirstQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstQuizComponent]
    });
    fixture = TestBed.createComponent(FirstQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
