import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverOneId: number = Math.floor(Math.random() * 100);
  serverTwoId: number = Math.floor(Math.random() * 100);
  serverStatus1: string = 'offline';
  serverStatus2: string = 'offline';
  fontSize = '1.5rem';

  username: string = '';
  inputStatus: boolean = false;

  constructor() {
    this.serverStatus1 = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverStatus2 = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return [this.serverStatus1, this.serverStatus2];
  }

  getColor1() {
    return this.serverStatus1 === 'online'
      ? 'badge badge-success'
      : 'badge badge-danger';
  }

  getColor2() {
    return this.serverStatus2 === 'online'
      ? 'badge badge-success'
      : 'badge badge-danger';
  }

  /*
  onMatchingInput(event: Event) {
    this.inputStatus = this.username !== '';
  }

  onResetInput() {
    this.username = '';
    this.inputStatus = false;
  }*/
}
