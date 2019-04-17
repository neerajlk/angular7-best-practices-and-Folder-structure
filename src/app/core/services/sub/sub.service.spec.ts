import { TestBed } from '@angular/core/testing';

import { SubService } from './sub.service';

describe('SubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubService = TestBed.get(SubService);
    expect(service).toBeTruthy();
  });
});
