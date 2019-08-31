import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './logintutor.component';

describe('LogintutorComponent', () => {
  let component: LogintutorComponent;
  let fixture: ComponentFixture<LogintutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});