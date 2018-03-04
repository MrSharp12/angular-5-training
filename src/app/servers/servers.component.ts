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

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

}
