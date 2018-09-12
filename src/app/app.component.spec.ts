import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertComponent } from '@app/ui/shared/alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@app/ui/ui.module';
import { WebStorageModule } from 'ngx-store';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.overrideComponent(AlertComponent, { set: { template: '<app-alert>Alert</app-alert>' } });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, UiModule, HttpClientTestingModule, WebStorageModule],
      declarations: [AppComponent, AlertComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));
  // it('should create the app', async(
  //   inject([HttpTestingController], (httpClient: HttpTestingController) => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     const app = fixture.debugElement.componentInstance;
  //     expect(app).toBeTruthy();
  //   })
  // ));
});
