import { SafePipe } from './safe.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';

describe('SafePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule]
    }).compileComponents();
  });
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
