import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertComponent } from './alert.component';
import { AlertType } from '@app/model/alert';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertService } from '@app/service/alert.service';

describe('AlertComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertDe: DebugElement;
  let alertEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [AlertModule.forRoot(), RouterTestingModule],
      providers: [AlertService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;

    component.alert = { type: AlertType.Success, message: 'success', timeout: 5000 };
    component.isOpen = true;
    fixture.detectChanges();

    alertDe = fixture.debugElement.query(By.css('div > span'));
    alertEl = alertDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display success message', () => {
    expect(alertEl.textContent).toContain('success');
  });
});
