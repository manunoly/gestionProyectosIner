import { RouterConfig } from '@angular/router';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EvaluarComponent } from './evaluar/evaluar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ListarComponent } from './listar/listar.component';

export const proyectoRoutes: RouterConfig = [
    { path: 'nuevo-proyecto', component: NuevoComponent },
    { path: 'evaluar-proyecto', component: EvaluarComponent },
    { path: 'detalles-proyecto/:id', component: DetallesComponent },
    { path: 'listar-proyectos', component: ListarComponent }
]