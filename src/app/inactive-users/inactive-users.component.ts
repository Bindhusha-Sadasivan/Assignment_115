import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';
import { LoggerService } from '../logger-service/logger.service';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent {
  // @Input() inActiveUsers:any[]=[];
  // @Output() setToActiveUser = new EventEmitter<any>();

  // setToActive(i:any){
  //   this.setToActiveUser.emit(i);
  //   this.setToActiveUser.subscribe(data => console.log(data));
  // }

inActiveUsers:any[]=[];

constructor(private userService:UserServiceService, private loggerService:LoggerService) {
  this.inActiveUsers = this.userService.inactiveUsers;
}

setToActive(id:any){
  this.userService.handleActiveUsers(id);
  this.loggerService.increaseActiveUsers();
}
}
