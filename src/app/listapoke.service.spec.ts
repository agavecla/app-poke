import { TestBed } from '@angular/core/testing';

import { ListaPokeService } from './listapoke.service';

describe('ListaPokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaPokeService = TestBed.get(ListaPokeService);
    expect(service).toBeTruthy();
  });
});
