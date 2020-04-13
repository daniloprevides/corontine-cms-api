import { TestBed } from '@angular/core/testing';

import { DefaultElementsService } from './default-elements.service';

describe('DefaultElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultElementsService = TestBed.get(DefaultElementsService);
    expect(service).toBeTruthy();
  });
});
