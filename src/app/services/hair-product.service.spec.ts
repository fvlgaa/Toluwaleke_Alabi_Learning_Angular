import { TestBed } from '@angular/core/testing';

import { HairProductService } from './hair-product.service';

describe('HairProductService', () => {
  let service: HairProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HairProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
