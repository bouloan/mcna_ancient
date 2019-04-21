import { TestBed } from '@angular/core/testing';

import { FormCheckingService } from './form-checking.service';

describe('FormCheckingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormCheckingService = TestBed.get(FormCheckingService);
    expect(service).toBeTruthy();
  });
});
