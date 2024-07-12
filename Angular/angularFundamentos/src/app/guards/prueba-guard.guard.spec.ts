import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pruebaGuardGuard } from './prueba-guard.guard';

describe('pruebaGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pruebaGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
