import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import type { TaskProps } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

export interface NewTaksType {
  date:string
   title:string
    summary:string
}

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId?:string
  @Output() close = new EventEmitter<void>()
  @Output() addNewTask = new EventEmitter<NewTaksType>()
  private tasksService = inject(TaskService)
  taskTitle=""
  taskSummary=""
  taskDate=""

 onCanceled(){
    this.close.emit()
 }

  handleSubmit(){
    this.tasksService.addTask({date:this.taskDate, title:this.taskTitle, summary:this.taskSummary}, this.userId!)
    this.close.emit()
  }
}
