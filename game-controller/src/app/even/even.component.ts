import { Component, Input, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Make evenElement Bindable from outside
  @Input() evenElement: { message: string; counter: number };
}
