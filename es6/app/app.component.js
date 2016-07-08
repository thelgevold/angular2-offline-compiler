import { Component } from '@angular/core';
import { TreeViewDemo } from './treeview/tree-view-demo';
export class AppComponent {
    constructor() {
        this.title = 'Demo';
    }
}
/** @nocollapse */
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                directives: [TreeViewDemo]
            },] },
];
