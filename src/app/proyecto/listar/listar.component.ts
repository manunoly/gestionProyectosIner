import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListarProyectosService } from '../listar-proyectos.service';
import { Proyecto } from '../proyecto';
import { ROUTER_DIRECTIVES } from '@angular/router';


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

  constructor(private _listarProyectos: ListarProyectosService) { }

  ngOnInit() {
    this.listarProyectos();
  }
  listarProyectos() {
    return this._listarProyectos.getProyectos().then(proyectos => this.proyectos = proyectos.slice());

  }

}
