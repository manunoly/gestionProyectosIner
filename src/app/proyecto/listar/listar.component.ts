import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListarProyectosService } from '../listar-proyectos.service';
import { Proyecto } from '../proyecto';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**TODO
 * fix how to resolve the projects from file.
 */

@Component({
  moduleId: module.id,
  selector: 'app-listar',
  templateUrl: 'listar.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ListarProyectosService],
  styleUrls: ['listar.component.css']
})
export class ListarComponent implements OnInit {
  proyectos: Proyecto[];
  proyectoSeleccionado: Proyecto;

  constructor() { }

  ngOnInit() {
    this.listarProyectos();
  }
  listarProyectos() {
    return "OK";
    // this._listarProyectos.getProyectos().then(proyectos => this.proyectos = proyectos.slice());

  }

}
