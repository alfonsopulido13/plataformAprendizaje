import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtutorComponent } from './dashboardtutor.component';

describe('PlatprincipalComponent', () => {
  let component: DashboardtutorComponent;
  let fixture: ComponentFixture<DashboardtutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardtutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardtutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
