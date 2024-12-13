import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';
import { LoggerService } from '../logger-service/logger.service';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
// @Input() activeUsers:any[]=[];
// @Output() setToInactiveUser = new EventEmitter<any>();

// setToInactive(i:any){
//   this.setToInactiveUser.emit(i);
//   this.setToInactiveUser.subscribe(data => console.log(data));
// }

activeUsers:any[]=[];

constructor(private userService:UserServiceService, private loggerService:LoggerService) {
  this.activeUsers = this.userService.activeUsers;
}

setToInactive(id:any){
  this.userService.handleInactiveUsers(id);
  this.loggerService.increaseActiveUsers();
}
}
