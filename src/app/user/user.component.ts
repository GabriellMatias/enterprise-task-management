import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';

export interface userProps{
  id:string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
// Using Signals just to know how it works
export class UserComponent {

  // component Props - recived values
  @Input() userWithOutSignals! : userProps

  @Input() selected! : boolean
  // component Outputs - values that can be emitted
  @Output() selectedWithOutSignals = new EventEmitter()

  // component inputs with signals
  userWithSignals  = input.required<userProps>()

  // component outputs with signals
  selectedWithSignals = output<userProps>()

  // like container that contains an value
  // When the value changes angular will update the components that uses that value
  // selectedUser = signal(DUMMY_USERS[randomIndex])

  // With signals you can use computed functions
  // the same diference between signals and states - (Best perfomatic solution)
  // imagePath = computed(()=>"assets/users/" + this.selectedUser().avatar)

  //Good code Pratice
  get imagePath(){
    // signal needs to get value by an "function"
    return "assets/users/" + this.userWithOutSignals.avatar
  }


  onSelectedUser(){
    this.selectedWithOutSignals.emit(this.userWithOutSignals)
    this.selectedWithSignals.emit(this.userWithOutSignals)
  }

}
