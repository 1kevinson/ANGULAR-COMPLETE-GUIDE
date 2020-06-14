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
  serverName = 'BlankServer';
  serverCreated = false;

  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created, name is ' + this.serverName;
  }

  // Event is the type of event
  onUpdateServerName(event: Event) {
    //Add the type of the DOM element nested by event
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
