import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-controller';

  gameElements = [{ message: '', counter: null }];

  onGameStarted($event: { valueOfMessage: string; counterNumber: number }) {
    this.gameElements.push({
      message: $event.valueOfMessage,
      counter: $event.counterNumber,
    });
    console.log(this.gameElements);
  }
}
