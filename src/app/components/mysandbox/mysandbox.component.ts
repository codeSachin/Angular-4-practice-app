import { Component } from '@angular/core';

@Component({
  selector: 'mysandbox',
  // templateUrl: './mysandbox.component.html',
  template:`
  <h1>Hello World {{title}} </h1>
  `,
  styleUrls: ['./mysandbox.component.css']
})
export class MysandboxComponent{
 title:string = "Hello";
 // constructor() { }


}
