/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ListarProyectosService } from './listar-proyectos.service';

describe('Service: ListarProyectos', () => {
  beforeEach(() => {
    addProviders([ListarProyectosService]);
  });

  it('should ...',
    inject([ListarProyectosService],
      (service: ListarProyectosService) => {
        expect(service).toBeTruthy();
      }));
});
