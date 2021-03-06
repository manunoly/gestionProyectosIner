import { provideRouter, RouterConfig }  from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoEncontradoComponent} from './no-encontrado/no-encontrado.component';
import { ReporteComponent }  from './reporte/reporte.component';
import { proyectoRoutes } from './proyecto/proyecto.routes';
import { MaximoComponent } from './maximo/maximo.component';

export const routes: RouterConfig = [
    ...proyectoRoutes,
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'reporte', component: ReporteComponent },
    { path: 'massimo', component: MaximoComponent },
    { path: '**', redirectTo: 'no-encontrado' },
    { path: 'no-encontrado', component: NoEncontradoComponent },

];

export const appRouterProviders = [
    provideRouter(routes)
];