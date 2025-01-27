import { NgModule } from "@angular/core";
import { CardComponent } from "./ui/card/card.component";

//My module - can create any
@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class SharedModule{}


