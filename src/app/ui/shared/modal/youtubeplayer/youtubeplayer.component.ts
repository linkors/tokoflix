import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html'
})
export class YoutubeplayerComponent implements OnInit {
  key: string;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
