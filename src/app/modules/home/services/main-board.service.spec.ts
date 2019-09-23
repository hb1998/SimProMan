import { TestBed } from '@angular/core/testing';

import { MainBoardService } from './main-board.service';

describe('MainBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainBoardService = TestBed.get(MainBoardService);
    expect(service).toBeTruthy();
  });
});
