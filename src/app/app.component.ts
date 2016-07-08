import { Component } from '@angular/core';

import { TreeViewDemo } from './treeview/tree-view-demo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TreeViewDemo]
})
export class AppComponent {
  title = 'Demo';
}
