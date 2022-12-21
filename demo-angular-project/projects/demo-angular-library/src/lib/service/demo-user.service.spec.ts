import { TestBed } from '@angular/core/testing';

import { DemoUserService } from './demo-user.service';

describe('DemoUserService', () => {
  let service: DemoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
