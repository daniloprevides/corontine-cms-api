import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';

describe('ConfirmationDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
