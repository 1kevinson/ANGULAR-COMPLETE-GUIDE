import { Component, OnInit } from '@angular/core';

@Component({
  //select by class
  //  selector: '.app-servers',
  //select by attribute
  //  selector: '[app-servers]',
  selector: 'app-servers',
  template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
