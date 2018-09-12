import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: UserService, useClass: MockLocalStorageService }]
    }).compileComponents();
  }));

  it('should be created', async(
    inject([HttpTestingController], (httpClient: HttpTestingController) => {
      const service: UserService = TestBed.get(UserService);
      expect(service).toBeTruthy();
    })
  ));
});

class MockLocalStorageService {}
