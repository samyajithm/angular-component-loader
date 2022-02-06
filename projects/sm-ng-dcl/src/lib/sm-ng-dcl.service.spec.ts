import { TestBed } from '@angular/core/testing';

import { SmNgDclService } from './sm-ng-dcl.service';

describe('SmNgDclService', () => {
  let service: SmNgDclService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmNgDclService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
