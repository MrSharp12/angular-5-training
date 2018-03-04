import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'], this is an array because we can point to multiple stylesheets
  styles: [`
    h3 { color: pink }
  `]//another way to style, also an array but of strings, where you can define the style
  //also, backticks used to create a multi-line statment
})
export class AppComponent {
  
}
//when to use file css vs inline?
//if we have lots of style code, go for file
//if just a line or two, go inline ts file