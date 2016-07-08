import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
export class TreeView {
}
/** @nocollapse */
TreeView.decorators = [
    { type: Component, args: [{
                selector: 'tree-view',
                templateUrl: './tree-view.html',
                directives: [TreeView, NgIf, NgFor]
            },] },
];
/** @nocollapse */
TreeView.propDecorators = {
    'directories': [{ type: Input },],
};
