import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  // Make it settable from outside
  @Input() message: any;
}
