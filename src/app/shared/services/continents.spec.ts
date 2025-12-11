import { TestBed } from '@angular/core/testing';

import { Continents } from './continents';

describe('Continents', () => {
  let service: Continents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Continents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
