import { Component, OnInit } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdInput } from '@angular2-material/input';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'app-maximo',
  templateUrl: 'maximo.component.html',
  directives: [MdCheckbox,MdInput,TOOLTIP_DIRECTIVES],
  styleUrls: ['maximo.component.css']
})
export class MaximoComponent implements OnInit {
photo = "./img/ventilacion.jpg";
avanzada:boolean = false;
mostrarCalculo:boolean = false;
var11:number = 11;
var12:number = 11;
var13:number = 11;
var21:number = 11;
var22:number = 11;
var23:number = 11;
var31:number = 11;
var32:number = 11;
var33:number = 11;
avanzadas(){
  this.avanzada = !this.avanzada;
  console.log(this.avanzada);
 }
 mostrarCalculos(){
  this.mostrarCalculo = !this.mostrarCalculo;
  console.log(this.avanzada);
 }
  constructor() { }

  ngOnInit() {
  }

}
