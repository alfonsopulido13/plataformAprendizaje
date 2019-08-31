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

import { PlatcursosmatematicasComponent } from './platcursosmatematicas.component';

describe('PlatcursosmatematicasComponent', () => {
  let component: PlatcursosmatematicasComponent;
  let fixture: ComponentFixture<PlatcursosmatematicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlatcursosmatematicasComponent],
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
    fixture = TestBed.createComponent(PlatcursosmatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
