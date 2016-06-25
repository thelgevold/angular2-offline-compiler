//338
// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { AppComponent } from './app/app.component';
"use strict";
// bootstrap(AppComponent);
//242
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_ngfactory_1 = require('./app/app.component.ngfactory');
var appInjector = core_1.ReflectiveInjector.resolveAndCreate(platform_browser_1.BROWSER_APP_PROVIDERS, platform_browser_1.browserPlatform().injector);
core_1.coreBootstrap(app_component_ngfactory_1.AppComponentNgFactory, appInjector);
//# sourceMappingURL=main.js.map