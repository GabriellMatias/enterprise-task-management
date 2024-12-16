import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent, type userProps } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf} from '@angular/common';

@Component({
  // selector do html para saber onde o componente vai ser colocado
  selector: 'app-root',
  // dependências de imports usados no componente
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  // template do html para o componente
  templateUrl: './app.component.html',
  // estilos do css para o componente
  styleUrl: './app.component.css'
})
export class AppComponent {
   users = DUMMY_USERS;
   selectedUser?:string

   get getSelectedUser() {
    return this.users.find(u => u.id === this.selectedUser)
   }
   onSelectedUser(user:userProps){
    this.selectedUser = user.id
     console.log('User selected: ', user);
   }
}
