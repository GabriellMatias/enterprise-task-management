import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared.module";
import { TasksModule } from "./tasks.module";


@NgModule({
  //declare all the components, directives, and pipes that belong to this module
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  //BrowserModule is a module that provides services for running Angular applications in the browser
  //Only import on root
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {

}


