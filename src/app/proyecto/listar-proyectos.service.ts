import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';
import { Proyectos } from './proyectos';

@Injectable()
export class ListarProyectosService {

  constructor() { }

  public getProyectos(){
    return Promise.resolve(Proyectos);
  }

}
