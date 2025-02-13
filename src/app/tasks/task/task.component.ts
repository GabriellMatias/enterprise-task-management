import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../task.service';
// put it on .model.ts file - good code pratice
export interface TaskProps{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:TaskProps
  private tasksService = inject(TaskService)

  onCompleteTask(){
    this.tasksService.completeTask(this.task.id)
  }


}
