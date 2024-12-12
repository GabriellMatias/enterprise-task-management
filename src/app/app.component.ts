import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

@Component({
  // selector do html para saber onde o componente vai ser colocado
  selector: 'app-root',
  // dependências de imports usados no componente
  imports: [HeaderComponent, UserComponent],
  // template do html para o componente
  templateUrl: './app.component.html',
  // estilos do css para o componente
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
