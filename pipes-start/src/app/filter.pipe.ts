import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
// Good to use on research
export class FilterPipe implements PipeTransform {
  transform(value: any, propName: string, filterString: string): any {
    const filteredArray = [];

    if (value.length === 0) {
      return value;
    }

    for (const item of value) {
      if (item[propName] === filterString) {
        filteredArray.push(item);
        console.log(item);
      }
    }
    return filteredArray;
  }
}
