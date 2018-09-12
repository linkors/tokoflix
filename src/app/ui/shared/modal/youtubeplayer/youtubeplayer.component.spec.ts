import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeplayerComponent } from './youtubeplayer.component';
import { PipeModule } from '@app/shared/pipe.module';
import { BsModalRef } from 'ngx-bootstrap/modal';

describe('YoutubeplayerComponent', () => {
  let component: YoutubeplayerComponent;
  let fixture: ComponentFixture<YoutubeplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeplayerComponent],
      imports: [PipeModule],
      providers: [BsModalRef]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
