import {Component, Input} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {Directory} from './directory';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.html',
    directives: [TreeView, NgIf, NgFor]
})

export class TreeView {
    @Input() directories: Array<Directory>;
}