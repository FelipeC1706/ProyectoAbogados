import { TestBed } from '@angular/core/testing';

import { AbogadoService } from './abogado.service';

describe('AbogadoService', () => {
  let service: AbogadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbogadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
