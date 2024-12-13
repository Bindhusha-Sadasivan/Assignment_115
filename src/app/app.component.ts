import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { InactiveUsersComponent } from "./inactive-users/inactive-users.component";
import { UserServiceService } from './user-service/user-service.service';
import { LoggerService } from './logger-service/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActiveUsersComponent, InactiveUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserServiceService, LoggerService]
})
export class AppComponent{
  // title = 'Assignment_115';
  // activeUsers = ["Tim", "Cook"];
  // inactiveUsers = ["Steve", "Jobs"];

  // handleInactiveUsers(id:any){
  //   console.log("this.activeUsers[id]"+ id + this.activeUsers[id]);
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id,1);

  // }
  // handleActiveUsers(id:any){
  //   console.log("this.inactiveUsers[id]"+ id + this.inactiveUsers[id]);
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id,1);
  // }

  constructor() {
  }


}
