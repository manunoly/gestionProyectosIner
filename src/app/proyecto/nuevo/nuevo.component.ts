import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import { NgForm } from '@angular/forms';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-nuevo',
  templateUrl: 'nuevo.component.html',
  directives: [ROUTER_DIRECTIVES,AlertComponent],
  styleUrls: ['nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.lenguaje = window.navigator.userLanguage || window.navigator.language;
    if (this.lenguaje == "es-Es") {
      this.lenguajeM = true;
    }
  }
  monedas = ['Dolares', 'Euros',
    'Yen Japonés'];
  private model = new Proyecto();
  submitted = false;
  lenguaje: string = "";
  lenguajeM: boolean = false;

  onSubmit() {
    this.submitted = true;
    alert("Salvar Proyecto");
  }
  active = true;
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: NgForm) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }
  get diagnostic() { return JSON.stringify(this.model); }
  volver() {
    this.submitted = false;
    this.limpiar();
  }
  limpiar() {
    this.model = new Proyecto();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
