import { TestBed } from '@angular/core/testing';

import { AvailabledatesService } from './availabledates.service';

describe('AvailabledatesService', () => {
  let service: AvailabledatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailabledatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
