import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //if this is used, then use selector as a <app-servers></app-servers> as element
  //selector: '[app-servers]',   // if  this, then use as a element attribute <h1 app-servers>
 // selector: '.app-servers',  // if this , then use element as class attribute of element
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allDisabkedServer: boolean = false;

  constructor(){
    setTimeout(() => {
      this.allDisabkedServer= true
      
    }, 2000);
  }
}
