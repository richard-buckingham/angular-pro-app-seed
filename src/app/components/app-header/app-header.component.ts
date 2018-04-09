import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../auth/models/user.interface';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-header.component.scss'],
  templateUrl: './app-header.component.html'
})
export class HeaderComponent {
  
  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();
  
  logoutUser() {
    this.logout.emit();
  }

}