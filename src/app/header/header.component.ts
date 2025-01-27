import { Component } from "@angular/core";



@Component({
  selector: 'app-header',
  // standalone: true significa que esse componente não precisa ser importado em outros módulos
  standalone: false,
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent{

}
