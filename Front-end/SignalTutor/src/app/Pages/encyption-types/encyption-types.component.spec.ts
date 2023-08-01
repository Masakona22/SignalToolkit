import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncyptionTypesComponent } from './encyption-types.component';

describe('EncyptionTypesComponent', () => {
  let component: EncyptionTypesComponent;
  let fixture: ComponentFixture<EncyptionTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncyptionTypesComponent]
    });
    fixture = TestBed.createComponent(EncyptionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
