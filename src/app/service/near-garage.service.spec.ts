import { TestBed } from '@angular/core/testing';

import { NearGaragesService } from './near-garage.service';

describe('NearGarageService', () => {
  let service: NearGaragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearGaragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
