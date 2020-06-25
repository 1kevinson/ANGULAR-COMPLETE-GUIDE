import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  intervalID: any;
  counter: number = 0;
  value: string;

  // Send the event outside the component
  @Output() gameStarted = new EventEmitter<{
    valueOfMessage: string;
    counterNumber: number;
  }>();

  startTheGame() {
    this.countDown();
  }

  endTheGame() {
    this.clearCountDown();
  }

  private countDown() {
    this.clearCountDown();
    this.intervalID = setInterval(() => {
      this.counter += 1;
      //Emit the event outside of the component
      this.gameStarted.emit({
        valueOfMessage: !(this.counter % 2) ? 'Even' : 'Odd',
        counterNumber: this.counter,
      });
    }, 1000);
  }

  private clearCountDown() {
    clearInterval(this.intervalID);
  }
}
