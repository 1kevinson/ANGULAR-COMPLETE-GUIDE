import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: any): any {
    return value.length > 10 ? value.substr(0, 10) + " ..." : value;
  }
}
