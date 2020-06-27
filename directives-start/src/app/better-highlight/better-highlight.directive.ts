import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // all the process in this method are running anything is rendered in the DOM
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";
  // bind the property of the element with host listener
  @HostBinding("style.backgroundColor") backgroundColor: string = this
    .defaultColor;

  // event listener
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
