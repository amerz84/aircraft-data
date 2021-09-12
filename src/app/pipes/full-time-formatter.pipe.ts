import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeUtility } from 'src/app/utils/datetime-utils';

@Pipe({
  name: 'fullTimeFormatter'
})
export class FullTimeFormatterPipe implements PipeTransform {

  constructor(private converter: DateTimeUtility) {    
  }

  /**Converts incomplete time-value strings to full "hh:mm:ss" strings, including leading zeroes */
  transform(value: string): string {
    const arr: string[] = [];
    arr.push(value);
    return this.converter.formatTimeArray(arr, 0, true)[0];
  }

}
