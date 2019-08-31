import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiltutorComponent } from './perfiltutor.component';

describe('PerfiltutorComponent', () => {
  let component: PerfiltutorComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfiltutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiltutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
