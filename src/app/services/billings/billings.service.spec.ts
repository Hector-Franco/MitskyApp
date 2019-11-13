import { TestBed } from '@angular/core/testing';

import { BillingsService } from './billings.service';

describe('BillingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingsService = TestBed.get(BillingsService);
    expect(service).toBeTruthy();
  });
});
