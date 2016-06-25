//338
// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { AppComponent } from './app/app.component';

// bootstrap(AppComponent);

//242
import {ComponentResolver, ReflectiveInjector, coreBootstrap} from '@angular/core';
import {BROWSER_APP_PROVIDERS, browserPlatform} from '@angular/platform-browser';

import {AppComponentNgFactory} from './app/app.component.ngfactory';

const appInjector = ReflectiveInjector.resolveAndCreate(BROWSER_APP_PROVIDERS, browserPlatform().injector);
coreBootstrap(AppComponentNgFactory, appInjector);