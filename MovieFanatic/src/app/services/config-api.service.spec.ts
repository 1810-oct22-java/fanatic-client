import { TestBed } from '@angular/core/testing';

import { ConfigAPIService } from './config-api.service';

describe('ConfigAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigAPIService = TestBed.get(ConfigAPIService);
    expect(service).toBeTruthy();
  });
});
