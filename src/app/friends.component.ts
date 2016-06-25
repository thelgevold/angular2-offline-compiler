import { Component } from '@angular/core';
import { NgFor } from '@angular/common'

@Component({
  moduleId: module.id,
  selector: 'friends',
  templateUrl: 'friends.component.html',
  directives: [NgFor]            
})
export class FriendsComponent {
  friends = ['Joe', 'Time', 'Jane', 'Tor'];        
}