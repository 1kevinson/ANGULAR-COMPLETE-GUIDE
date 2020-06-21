import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //None, Native (affect all the DOM)
})
export class ServerElementComponent implements OnInit, OnChanges {
  // @Input is use to make a property bindable from outside
  @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {
    console.log("constructor log");
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    console.log("ngOnChanges log");
  }

  ngOnInit(): void {
    console.log("ngOnInit log");
  }
}
