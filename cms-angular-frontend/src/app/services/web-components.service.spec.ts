import { TestBed } from '@angular/core/testing';

import { WebComponentsService } from './web-components.service';

describe('WebComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebComponentsService = TestBed.get(WebComponentsService);
    expect(service).toBeTruthy();
  });
});
