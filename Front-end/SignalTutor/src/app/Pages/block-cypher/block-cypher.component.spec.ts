import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCypherComponent } from './block-cypher.component';

describe('BlockCypherComponent', () => {
  let component: BlockCypherComponent;
  let fixture: ComponentFixture<BlockCypherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockCypherComponent]
    });
    fixture = TestBed.createComponent(BlockCypherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
