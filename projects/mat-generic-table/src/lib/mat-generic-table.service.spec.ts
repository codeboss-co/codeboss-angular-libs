import { TestBed } from '@angular/core/testing';

import { MatGenericTableService } from './mat-generic-table.service';

describe('MatGenericTableService', () => {
  let service: MatGenericTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatGenericTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
