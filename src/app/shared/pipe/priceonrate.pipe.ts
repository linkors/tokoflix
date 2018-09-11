import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceonrate'
})
export class PriceonratePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const rate = +value;
    if (rate >= 1 && rate <= 3) {
      return 3500;
    } else if (rate > 3 && rate <= 6) {
      return 8250;
    } else if (rate > 6 && rate <= 8) {
      return 16350;
    } else if (rate > 8 && rate <= 10) {
      return 21250;
    }
  }
}
