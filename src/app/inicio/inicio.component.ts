import { Component, OnInit,  } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-inicio',
  templateUrl: 'inicio.component.html',
  directives: [MdCheckbox,MdInput],
  styleUrls: ['inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
