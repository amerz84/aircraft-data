import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToMile'
})
export class MeterToMilePipe implements PipeTransform {

  transform(meter: number): number {
    const meterToMile = 0.000621371;

    return (meter * meterToMile);
  }

}
