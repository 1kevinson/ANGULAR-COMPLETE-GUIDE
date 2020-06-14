import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = Math.floor(Math.random() * 100);
  serverStatus: string = 'offline';
  fontSize = '1.4rem';

  username: string = '';
  inputStatus: boolean = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return [this.serverStatus];
  }

  getColor() {
    return this.serverStatus === 'online'
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
