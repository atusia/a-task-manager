import { Component, Input, output } from '@angular/core';
import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: ITask;
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
