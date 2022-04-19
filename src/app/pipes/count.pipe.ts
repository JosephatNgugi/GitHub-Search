import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
//   transform(value: any): number {
//     let today: Date = new Date(); //get current date and time
//     let todayWithNoTime: any = new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate()
//     );
//     var dateDifference = Math.abs(value - todayWithNoTime); //returns value in milliseconds
//     const secondsInDay = 86400; //60 seconds * 60minutes in an hour * 24hours in a day
//     var dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds
//     var dateCounter = dateDifferenceSeconds / secondsInDay;
//     if (dateCounter >= 1 && value > todayWithNoTime) {
//       return dateCounter;
//     } else {
//       return 0;
//     }
//   }
}
