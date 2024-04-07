import { TestBed } from '@angular/core/testing';

import { NearGarageService } from './near-garage.service';

describe('NearGarageService', () => {
  let service: NearGarageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearGarageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
