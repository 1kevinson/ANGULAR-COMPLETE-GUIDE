import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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

  @ViewChild("heading", { static: true }) header: ElementRef;

  // allow to get access to content which is stored in another component but passed via ng-content
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor log");
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    console.log("ngOnChanges called");
  }

  // Content Init
  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Text Content" + this.header.nativeElement.textContent);
    console.log(
      "paragraph content " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log("doCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log(
      "paragraph content " + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log("afterContentChecked called");
  }

  ngAfterViewChecked(): void {
    console.log("afterViewChecked called");
  }

  // Allow to use value on the DOM , trigger before ngOnInit
  // View init
  ngAfterViewInit(): void {
    console.log("afterViewInit called");
    console.log("Text Content" + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("onDestroy called");
  }
}
