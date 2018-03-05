import { Component } from '@angular/core';//import component, since TS doesn't know it from the start

@Component({//passing a JS object to config this, stored as metadata
    selector:'app-server',//as a selector, can be used in other component's html files
    templateUrl: './server.component.html'
})//component decorator, let's angular know that this is a component
export class ServerComponent { //exporting this component, so it can be used elsewhere
    serverId = 10;
    serverStatus = 'offline';
    //these properties will be output to the template

    constructor() {//constructor is a method each ts has
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}