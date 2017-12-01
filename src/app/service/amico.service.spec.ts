import { TestBed, inject } from '@angular/core/testing';

import { AmicoService } from './amico.service';

describe('AmicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmicoService]
    });
  });

  it('should be created', inject([AmicoService], (service: AmicoService) => {
    expect(service).toBeTruthy();
  }));
});
