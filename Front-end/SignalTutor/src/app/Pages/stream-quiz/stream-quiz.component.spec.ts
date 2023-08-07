import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamQuizComponent } from './stream-quiz.component';

describe('StreamQuizComponent', () => {
  let component: StreamQuizComponent;
  let fixture: ComponentFixture<StreamQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreamQuizComponent]
    });
    fixture = TestBed.createComponent(StreamQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
