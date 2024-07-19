import { TestBed } from '@angular/core/testing';

import { FontSwitchService } from './font-switch.service';

describe('FontSwitchService', () => {
  let service: FontSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
