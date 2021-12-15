import { TestBed } from '@angular/core/testing';

import { ImageprocessService } from './imageprocess.service';

describe('ImageprocessService', () => {
  let service: ImageprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
