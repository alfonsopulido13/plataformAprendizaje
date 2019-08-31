import { TestBed } from '@angular/core/testing';

import { PerfiltutorService } from './perfiltutor.service';

describe('PerfiltutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfiltutorService = TestBed.get(PerfiltutorService);
    expect(service).toBeTruthy();
  });
});
