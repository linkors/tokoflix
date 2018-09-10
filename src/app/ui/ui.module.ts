import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from '@app/app-routing/app-routing.module';

import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { PriceonratePipe } from '@app/shared/pipe/priceonrate.pipe';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    DetailComponent,
    PriceonratePipe],
  exports: [LayoutComponent]
})
export class UiModule { }
