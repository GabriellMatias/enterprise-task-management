import { Component, Input } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { type NewTaksType } from './new-task/new-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId?:string
  @Input() name?:string

  isNewTaskModalOpen = false
  tasks = dummyTasks

  //Not a good option, is an separeted instance for this component..
  //private tasksService = new TaskService()

  //Good option, is an instance shared with all components
  constructor(private tasksService:TaskService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId!)
  }

  onOpenNewTaskModal(){
    this.isNewTaskModalOpen = true
  }

  onAddNewTask(task:NewTaksType){
    this.isNewTaskModalOpen = false
  }

  onCloseNewTask(){
    this.isNewTaskModalOpen = false
  }
}
