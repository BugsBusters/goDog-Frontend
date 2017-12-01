import { TestBed, inject } from '@angular/core/testing';

import { RecensioneService } from './recensione.service';

describe('RecensioneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecensioneService]
    });
  });

  it('should be created', inject([RecensioneService], (service: RecensioneService) => {
    expect(service).toBeTruthy();
  }));
});
