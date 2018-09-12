import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '@app/ui/shared/header/header.component';
import { FooterComponent } from '@app/ui/shared/footer/footer.component';
import { LocalStorageService } from 'ngx-store';
import { RouterTestingModule } from '@angular/router/testing';
import { PipeModule } from '@app/shared/pipe.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent, FooterComponent],
      imports: [RouterTestingModule, PipeModule],
      providers: [LocalStorageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
