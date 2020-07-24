import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
// Good to use on research
export class FilterPipe implements PipeTransform {
  transform(value: any, propName: string, filterString: string): any {
    if (value.length === 0 || filterString === "") {
      return value;
    }

    const filteredArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }
}
