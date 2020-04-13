import { TestBed } from '@angular/core/testing';

import { AddonService } from './addon.service';

describe('AddonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddonService = TestBed.get(AddonService);
    expect(service).toBeTruthy();
  });
});
