import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html'
})
export class YoutubeplayerComponent implements OnInit {
  key: string;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
