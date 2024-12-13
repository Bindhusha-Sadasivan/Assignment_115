import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  title = 'Assignment_115';
  activeUsers = ["Tim", "Cook"];
  inactiveUsers = ["Steve", "Jobs"];

  constructor() { }

  handleInactiveUsers(id:any){
    console.log("this.activeUsers[id]"+ id + this.activeUsers[id]);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);

  }
  handleActiveUsers(id:any){
    console.log("this.inactiveUsers[id]"+ id + this.inactiveUsers[id]);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }
}
