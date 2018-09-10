import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceonrate'
})
export class PriceonratePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const rate = +value;
    if (rate >= 1 && rate <= 3) {
      return 'Rp. 3.500';
    } else if (rate > 3 && rate <= 6) {
      return 'Rp. 8.250';
    } else if (rate > 6 && rate <= 8) {
      return 'Rp. 16.350';
    } else if (rate > 8 && rate <= 10) {
      return 'Rp. 21.250';
    }
  }

}
