import { Component } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

// let template = require('./dropdown-demo.html');

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',  
  directives: [ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
