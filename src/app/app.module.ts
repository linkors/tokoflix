import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { WebStorageModule } from 'ngx-store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppComponent } from './app.component';
import { YoutubeplayerComponent } from '@app/shared/modal/youtubeplayer/youtubeplayer.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SafePipe } from './shared/pipe/safe.pipe';
import { PriceonratePipe } from './shared/pipe/priceonrate.pipe';

@NgModule({
  declarations: [AppComponent, YoutubeplayerComponent, AlertComponent, SafePipe],
  imports: [BrowserModule, UiModule, HttpClientModule, WebStorageModule, ModalModule.forRoot(), AlertModule.forRoot()],
  providers: [PriceonratePipe],
  entryComponents: [YoutubeplayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
