import { TestBed } from '@angular/core/testing';

import { CacheServieService } from './cache-servie.service';

describe('CacheServieService', () => {
  let service: CacheServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
