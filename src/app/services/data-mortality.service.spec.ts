import { TestBed } from '@angular/core/testing';

import { DataMortalityService } from './data-mortality.service';

describe('DataMortalityService', () => {
  let service: DataMortalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMortalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
