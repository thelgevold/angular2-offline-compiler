import { Component } from '@angular/core';
import { FriendsComponent } from './friends.component';
import { TreeViewDemo } from './treeview/tree-view-demo';
export class AppComponent {
    constructor() {
        this.title = 'Friends';
    }
}
/** @nocollapse */
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                directives: [FriendsComponent, TreeViewDemo]
            },] },
];
//# sourceMappingURL=/app/app.component.js.map