import { Component, input, output } from '@angular/core';
import { IUser } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component( {
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [
    CardComponent
  ]
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
