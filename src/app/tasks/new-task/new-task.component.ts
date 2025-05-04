import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTaskData } from '../task/task.model';

@Component( {
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
} )
export class NewTaskComponent {
  cancel = output();
  add = output<INewTaskData>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }
}
