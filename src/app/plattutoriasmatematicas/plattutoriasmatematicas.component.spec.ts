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

import { PlattutoriasmatematicasComponent } from './plattutoriasmatematicas.component';

describe('PlattutoriasmatematicasComponent', () => {
  let component: PlattutoriasmatematicasComponent;
  let fixture: ComponentFixture<TutoriasmatematicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlattutoriasmatematicasComponent],
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
    fixture = TestBed.createComponent(PlattutoriasmatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
