import { SafePipe } from './safe.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DomSanitizer]
    });
  });
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
