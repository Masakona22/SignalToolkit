import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockQuizComponent } from './block-quiz.component';

describe('BlockQuizComponent', () => {
  let component: BlockQuizComponent;
  let fixture: ComponentFixture<BlockQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockQuizComponent]
    });
    fixture = TestBed.createComponent(BlockQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
