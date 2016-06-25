import {ComponentResolver, ReflectiveInjector, coreBootstrap} from '@angular/core';
import {BROWSER_APP_PROVIDERS, browserPlatform} from '@angular/platform-browser';

import {provideForms, disableDeprecatedForms} from '@angular/forms';

//offline compiled entry point
import {AppComponentNgFactory} from './app/app.component.ngfactory';

const appInjector = ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS, provideForms()], browserPlatform().injector);
coreBootstrap(AppComponentNgFactory, appInjector);