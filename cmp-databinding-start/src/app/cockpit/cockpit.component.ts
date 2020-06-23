import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // EventEmitter is a Object which allow us to create custom event (cockpit)
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //newServerName = "";
  //newServerContent = "";

  // Local reference in component
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // Send the cockpit event outside the component
  onAddServer(name: HTMLInputElement) {
    //console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
