import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  firstName: string ='';
  lastName: string ='';
  email: string ='';
  phone: string ='';
  address: string = '';

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  create() {
    let userObj = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address
    }

    this.userService.addNewUser(userObj);
  }

}
