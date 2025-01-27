import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { SharedModule } from "./shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  //Browser module use only on root
  //Use common module to use on other modules
  imports: [CommonModule, SharedModule, FormsModule]
})
export class TasksModule{}


