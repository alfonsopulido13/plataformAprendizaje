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

import { PlatcursoscienciasComponent } from './platcursosciencias.component';

describe('PlatcursoscienciasComponent', () => {
  let component: PlatcursoscienciasComponent;
  let fixture: ComponentFixture<PlatcursoscienciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlatcursoscienciasComponent],
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
    fixture = TestBed.createComponent(PlatcursoscienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
