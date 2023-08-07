import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCypherComponent } from './stream-cypher.component';

describe('StreamCypherComponent', () => {
  let component: StreamCypherComponent;
  let fixture: ComponentFixture<StreamCypherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreamCypherComponent]
    });
    fixture = TestBed.createComponent(StreamCypherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
