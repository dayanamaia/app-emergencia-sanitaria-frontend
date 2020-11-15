import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthPipe'
})
export class MonthPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    const month = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
    if(value > 0 && value < 13) {
      return month[value -1];
    }

    return null;
  }

}
