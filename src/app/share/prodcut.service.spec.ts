import { TestBed, inject } from '@angular/core/testing';

import { ProdcutService } from './prodcut.service';

describe('ProdcutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdcutService]
    });
  });

  it('should be created', inject([ProdcutService], (service: ProdcutService) => {
    expect(service).toBeTruthy();
  }));
});
