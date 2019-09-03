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

import { TutoriasmatematicasComponent } from './tutoriasmatematicas.component';

describe('TutoriasmatematicasComponent', () => {
  let component: TutoriasmatematicasComponent;
  let fixture: ComponentFixture<TutoriasmatematicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TutoriasmatematicasComponent],
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
    fixture = TestBed.createComponent(TutoriasmatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
