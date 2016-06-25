import {ComponentResolver, ReflectiveInjector, coreBootstrap} from '@angular/core';
import {BROWSER_APP_PROVIDERS, browserPlatform} from '@angular/platform-browser';

//offline compiled entry point
import {AppComponentNgFactory} from './app/app.component.ngfactory';

const appInjector = ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS], browserPlatform().injector);
coreBootstrap(AppComponentNgFactory, appInjector);