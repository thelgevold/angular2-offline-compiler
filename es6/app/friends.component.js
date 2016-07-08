import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
export class FriendsComponent {
    constructor() {
        this.friends = ['Joe', 'Time', 'Jane', 'Tor'];
    }
}
/** @nocollapse */
FriendsComponent.decorators = [
    { type: Component, args: [{
                selector: 'friends',
                templateUrl: 'friends.component.html',
                directives: [NgFor]
            },] },
];
//# sourceMappingURL=/app/friends.component.js.map