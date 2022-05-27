import { TestBed } from '@angular/core/testing';

import { AvailableFlightsService } from './available-flights.service';

describe('AvailableFlightsService', () => {
  let service: AvailableFlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableFlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
