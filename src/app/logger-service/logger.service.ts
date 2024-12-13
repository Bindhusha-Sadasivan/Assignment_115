import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  activeUsersCount = 0;
  inactiveUsersCount = 0;

  increaseActiveUsers(){
    this.activeUsersCount++;
    console.log("Active users count increased: "+this.activeUsersCount);
  }

  increaseInActiveUsers(){
    this.inactiveUsersCount++;
    console.log("In Active users count increased: "+this.inactiveUsersCount)
  }
}
