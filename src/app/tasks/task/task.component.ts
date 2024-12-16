import { Component, EventEmitter, Input, Output } from '@angular/core';

// put it on .model.ts file - good code pratice
interface TaskProps{
  id: String;
  userId: String;
  title: String;
  summary: String;
  dueDate: String;
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:TaskProps
  @Output() complete = new EventEmitter()

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }

}
