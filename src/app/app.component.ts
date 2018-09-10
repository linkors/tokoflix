import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'ngx-store';
 
import { TmdbService } from '@app/service/tmdb.service';
import { ImageConf } from '@app/model/imageconf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @LocalStorage('imageConfig') config: ImageConf;

  constructor(private tmdbService: TmdbService) {

  }

  ngOnInit() {
    if (!this.config) {
      this.getConfig();
    }
  }

  getConfig () {
    this.tmdbService.getConfiguration()
    .subscribe(resp => {
      this.config = resp.images;
    });
  }
}
