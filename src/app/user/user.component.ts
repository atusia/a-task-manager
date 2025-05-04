import { Component, input, output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<IUser>();
  selected = input.required<boolean>();
  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user().avatar;
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
