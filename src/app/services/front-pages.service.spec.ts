import { TestBed, inject } from '@angular/core/testing';

import { FrontPagesService } from './front-pages.service';

describe('FrontPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontPagesService]
    });
  });

  it('should be created', inject([FrontPagesService], (service: FrontPagesService) => {
    expect(service).toBeTruthy();
  }));
});
