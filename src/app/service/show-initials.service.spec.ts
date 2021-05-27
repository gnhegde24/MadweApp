import { TestBed } from '@angular/core/testing';

import { ShowInitialsService } from './show-initials.service';

describe('ShowInitialsService', () => {
  let service: ShowInitialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowInitialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
