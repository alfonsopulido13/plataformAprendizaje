import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { PlattutoriasidiomasComponent } from './plattutoriasidiomas.component';

describe('PlattutoriasidiomasComponent', () => {
  let component: PlattutoriasidiomasComponent;
  let fixture: ComponentFixture<TutoriasidiomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlattutoriasidiomasComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlattutoriasidiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
