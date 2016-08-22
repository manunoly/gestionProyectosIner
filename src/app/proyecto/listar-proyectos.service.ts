import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';
import { PROYECTOS } from './proyectos';

@Injectable()
export class ListarProyectosService {

  getProyectos(): Promise<Proyecto[]> {
    // return Proyectos;
    return Promise.resolve(PROYECTOS);
  }

}
