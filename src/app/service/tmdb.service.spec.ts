import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TmdbService } from './tmdb.service';

describe('TmdbService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should be created', async(
    inject([HttpTestingController], (httpClient: HttpTestingController) => {
      const service: TmdbService = TestBed.get(TmdbService);
      expect(service).toBeTruthy();
    })
  ));
});
