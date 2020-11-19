import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsBoardComponent } from './doctors-board.component';

describe('DoctorsBoardComponent', () => {
  let component: DoctorsBoardComponent;
  let fixture: ComponentFixture<DoctorsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
