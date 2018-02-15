import { TestBed, inject } from '@angular/core/testing';

import { TestHelperService } from './test-helper.service';

describe('TestHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestHelperService]
    });
  });

  it('should be created', inject([TestHelperService], (service: TestHelperService) => {
    expect(service).toBeTruthy();
  }));
});
