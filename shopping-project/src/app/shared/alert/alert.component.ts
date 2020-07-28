import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  // Make it settable from outside
  @Input() message: any;
  // Make it listeneable from outisde
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
