import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false, // Very useful to refresh page after pipe
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      return a[propName] > b[propName] ? 1 : -1;
    });
  }
}
