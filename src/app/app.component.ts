import { Component } from '@angular/core';

import { FriendsComponent } from './friends.component';
import { TreeViewDemo } from './treeview/tree-view-demo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [FriendsComponent, TreeViewDemo]
})
export class AppComponent {
  title = 'Friends';
}
