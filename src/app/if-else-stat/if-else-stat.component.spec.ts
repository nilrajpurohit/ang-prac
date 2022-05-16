import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseStatComponent } from './if-else-stat.component';

describe('IfElseStatComponent', () => {
  let component: IfElseStatComponent;
  let fixture: ComponentFixture<IfElseStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
