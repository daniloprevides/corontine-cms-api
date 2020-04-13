import { TestBed } from '@angular/core/testing';

import { AppInitializerService } from './app-initializer.service';

describe('AppInitialierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppInitializerService = TestBed.get(AppInitializerService);
    expect(service).toBeTruthy();
  });
});
