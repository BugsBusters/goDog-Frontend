import { TestBed, inject } from '@angular/core/testing';

import { UtenteService } from './utente.service';

describe('UtenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtenteService]
    });
  });

  it('should be created', inject([UtenteService], (service: UtenteService) => {
    expect(service).toBeTruthy();
  }));
});
