import { Component, OnInit } from '@angular/core';

@Component({
  //select by class
  //  selector: '.app-servers',
  //select by attribute
  //  selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  // Event is the type of event
  onUpdateServerName(event: Event) {
    //Add the type of the DOM element nested by event
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
