import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { PipeModule } from './shared/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { WebStorageModule } from 'ngx-store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppComponent } from './app.component';
import { YoutubeplayerComponent } from '@app/ui/shared/modal/youtubeplayer/youtubeplayer.component';
import { AlertComponent } from '@app/ui/shared/alert/alert.component';

@NgModule({
  declarations: [AppComponent, YoutubeplayerComponent, AlertComponent],
  imports: [
    BrowserModule,
    UiModule,
    PipeModule,
    HttpClientModule,
    WebStorageModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  entryComponents: [YoutubeplayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
