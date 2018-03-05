import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',by placing the component selector in square brackest
  //it now has to be selected as an attribute
  // selector: '.app-servers',now it is selected by class
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  //component must have either template or templateUrl, must have one at all times
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['testServer', 'testServer2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Sever was created!  Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //we have to wrap HTMLInputElement in HTML tags to inform
    //ts that we know that the type of the HTML element of this event 
    //will be an HTML input
  }
}
