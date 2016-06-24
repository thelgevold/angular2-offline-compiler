import { Component } from '@angular/core';

@Component({
  selector: 'friends',
  template: `<div *ngFor="let friend of friends"></div>`            
})
export class FriendsComponent {
  firends = ['Joe', 'Time', 'Jane', 'Tor'];        
}