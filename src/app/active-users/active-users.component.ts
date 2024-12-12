import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
@Input() activeUsers:any[]=[];
@Output() setToInactiveUser = new EventEmitter<any>();

setToInactive(i:any){
  this.setToInactiveUser.emit(i);
  this.setToInactiveUser.subscribe(data => console.log(data));
}

}
