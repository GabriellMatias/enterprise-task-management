import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';
import { userProps } from './user/user.component';

@Component({
  // selector do html para saber onde o componente vai ser colocado
  selector: 'app-root',
  // dependências de imports usados no componente
  // on standalone we dont use imports
  //imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  // template do html para o componente
  templateUrl: './app.component.html',
  // estilos do css para o componente
  styleUrl: './app.component.css',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
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
