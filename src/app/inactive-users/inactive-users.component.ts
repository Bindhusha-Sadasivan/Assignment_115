import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent {
  @Input() inActiveUsers:any[]=[];
  @Output() setToActiveUser = new EventEmitter<any>();

  setToActive(i:any){
    this.setToActiveUser.emit(i);
    this.setToActiveUser.subscribe(data => console.log(data));
  }
}
