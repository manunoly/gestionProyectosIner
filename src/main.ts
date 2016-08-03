import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/routes';

if (environment.production) {
  enableProdMode();
}

/*bootstrap(AppComponent, [
  appRouterProviders
]);*/

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));