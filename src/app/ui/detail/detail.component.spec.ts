import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from '@app/shared/pipe.module';
import { DetailComponent } from './detail.component';
import { LocalStorageService } from 'ngx-store';
import { Router } from '@angular/router';
import { AlertComponent } from '@app/ui/shared/alert/alert.component';
import { AlertService } from '@app/service/alert.service';
import { RouterTestingModule } from 'node_modules/@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('DetailComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.overrideComponent(AlertComponent, { set: { template: '<app-alert>Alert</app-alert>' } });
    TestBed.configureTestingModule({
      imports: [PipeModule, HttpClientModule, RouterTestingModule, ModalModule.forRoot()],
      declarations: [DetailComponent, AlertComponent],
      providers: [LocalStorageService, AlertService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DetailComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
