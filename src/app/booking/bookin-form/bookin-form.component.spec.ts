import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinFormComponent } from './bookin-form.component';

describe('BookinFormComponent', () => {
  let component: BookinFormComponent;
  let fixture: ComponentFixture<BookinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
