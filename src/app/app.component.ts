import { Component } from '@angular/core';

import { FriendsComponent } from './friends.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [FriendsComponent]
})
export class AppComponent {
  title = 'Friends';
}
