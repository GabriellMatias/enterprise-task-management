import { Injectable } from "@angular/core"
import type { NewTaksType } from "./new-task/new-task.component"

@Injectable({providedIn: 'root'})
export class TaskService {
   private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor(){
    const tasksFromLocalStorage = localStorage.getItem('tasks')
    if(tasksFromLocalStorage){
      this.tasks = JSON.parse(tasksFromLocalStorage)
    }
  }
  getTasks() {
    return this.tasks
  }

  getUserTasks(userId: string) {
   return this.tasks.filter(t => t.userId === userId)
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId)
    this.saveTasksToLocalStorage()
  }

  addTask(task: NewTaksType, userId: string) {
    this.tasks.unshift({
      userId: userId!,
      id: Math.random().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    })
    this.saveTasksToLocalStorage()
  }

  saveTasksToLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}
