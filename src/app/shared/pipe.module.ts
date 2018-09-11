import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceonratePipe } from '@app/shared/pipe/priceonrate.pipe';
import { SafePipe } from '@app/shared/pipe/safe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PriceonratePipe, SafePipe],
  providers: [PriceonratePipe],
  exports: [PriceonratePipe, SafePipe]
})
export class PipeModule {}
