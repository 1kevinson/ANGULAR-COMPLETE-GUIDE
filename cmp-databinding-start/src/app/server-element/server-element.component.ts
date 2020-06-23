import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //None, Native (affect CSS in all the DOM)
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // @Input is use to make a property bindable from outside
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log("constructor log");
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    console.log("ngOnChanges called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngDoCheck() {
    console.log("doCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(): void {
    console.log("afterContentChecked called");
  }

  ngAfterViewChecked(): void {
    console.log("afterViewChecked called");
  }

  ngAfterViewInit(): void {
    console.log("afterViewInit called");
  }

  ngOnDestroy(): void {
    console.log("onDestroy called");
  }
}
