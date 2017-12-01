import { TestBed, inject } from '@angular/core/testing';

import { InserzioniService } from './inserzioni.service';

describe('InserzioniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InserzioniService]
    });
  });

  it('should be created', inject([InserzioniService], (service: InserzioniService) => {
    expect(service).toBeTruthy();
  }));
});
