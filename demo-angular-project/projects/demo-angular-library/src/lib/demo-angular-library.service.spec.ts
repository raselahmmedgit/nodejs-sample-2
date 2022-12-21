import { TestBed } from '@angular/core/testing';

import { DemoAngularLibraryService } from './demo-angular-library.service';

describe('DemoAngularLibraryService', () => {
  let service: DemoAngularLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoAngularLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
