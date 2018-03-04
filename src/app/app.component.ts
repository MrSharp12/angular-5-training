import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'], this is an array because we can point to multiple stylesheets
  styles: [`
    h3 { color: pink }
  `]
})
export class AppComponent {
  
}
